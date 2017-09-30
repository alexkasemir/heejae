import hashlib, base64, boto3
from boto3 import session
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.exceptions import ParseError, NotAuthenticated
from django.utils import timezone

from posts.models import Post
from posts.serializers.post import PostSerializer

from base.settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_STORAGE_BUCKET_NAME, S3_URL


class PostViewSet(mixins.RetrieveModelMixin,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def upload_s3(self, fileURI, name):
        uploadDestination = 'images/' + name
        storage_session = session.Session(aws_access_key_id=AWS_ACCESS_KEY_ID,
                                    aws_secret_access_key=AWS_SECRET_ACCESS_KEY)
        s3 = storage_session.resource('s3')
        s3.Object(AWS_STORAGE_BUCKET_NAME, uploadDestination).put(Body=fileURI)

    def create(self, request):
        user = self.request.user
        if user.is_anonymous():
            raise NotAuthenticated
        fileURI = request.data.get('fileURI')
        fileName = request.data.get('fileName')
        fileType = request.data.get('fileType')
        if fileURI is not None:
            (_, file) = fileURI.split(',')
            decoded_file = base64.b64decode(file)
            (_, ext) = fileType.split('/')
            hash_ = hashlib.sha1()
            hash_.update(str(timezone.now()))
            name = hash_.hexdigest() + '.' + ext
            # try:
            self.upload_s3(decoded_file, name)
            url = S3_URL + '/' + name
            data = {
                'user': user.id,
                'url': url,
                'fileType': fileType,
                'fileName': fileName,
                'like_max': 10
            }
            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            # except:
            #     raise ParseError()
        return Response(serializer.data)
