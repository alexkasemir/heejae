# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class workout(models.Model):
	user = models.ForeignKey(User, related_name='workouts')
	start_ts = models.DateTimeField(auto_now_add=True)
	end_ts = models.DateTimeField(auto_now_add=True)
	
