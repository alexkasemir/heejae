from rest_framework import viewsets, mixins
from rest_framework.response import Response

from posts.models import Post
from posts.serializers.post import PostSerializer


class PostViewSet(mixins.RetrieveModelMixin,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
