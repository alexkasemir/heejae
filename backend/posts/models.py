# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from users.models import User


class Post(models.Model):
    user = models.ForeignKey(User, related_name='posts')
    created_ts = models.DateTimeField(auto_now_add=True)
    like_max = models.PositiveIntegerField()


class PostAttachment(models.Model):
    post = models.ForeignKey(Post, related_name='attachments')
    url = models.TextField(null=True, blank=True)
    fileType = models.CharField(max_length=255, null=True, blank=True)
    added = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.url
