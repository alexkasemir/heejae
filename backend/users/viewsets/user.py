
from rest_framework.response import Response
from rest_framework import viewsets, mixins
from rest_framework.decorators import detail_route, list_route

from users.models import User
from users.serializers.user import UserSerializer


class UserViewSet(mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @list_route(methods=['get', 'patch'])
    def me(self, request):
        user = self.queryset.get(username=self.request.user.username)
        serializer = self.get_serializer(user)
        return Response(serializer.data)
