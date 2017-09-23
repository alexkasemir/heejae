# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from users.models import User


class Workout(models.Model):
    user = models.ForeignKey(User, related_name='workouts')
    start_ts = models.DateTimeField()
    end_ts = models.DateTimeField()
    created_ts = models.DateTimeField(auto_now_add=True)
