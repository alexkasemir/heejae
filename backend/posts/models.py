# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from users.models import User


class Post(models.Model):
    user = models.ForeignKey(User, related_name='posts')
    created_ts = models.DateTimeField(auto_now_add=True)
    url = models.TextField()
    fileType = models.CharField(max_length=255)
    fileName = models.CharField(max_length=255)
    like_max = models.PositiveIntegerField()
