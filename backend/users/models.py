# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    research_group = models.CharField(max_length=50)
