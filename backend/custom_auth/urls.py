from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_jwt.views import (
    obtain_jwt_token,
    refresh_jwt_token,
    verify_jwt_token
)

urlpatterns = [
    url(r'^auth/token-auth/', obtain_jwt_token),
    url(r'^auth/token-refresh/', refresh_jwt_token),
    url(r'^auth/token-verify/', verify_jwt_token),
]
