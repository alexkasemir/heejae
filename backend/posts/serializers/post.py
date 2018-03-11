
from __future__ import division
from django.utils import timezone

from rest_framework import serializers
from posts.models import Post


def get_like_count(post):
    like_max = post.like_max
    now = timezone.now()
    created = post.created_ts
    ten_pm = created.replace(hour=22, minute=0, second=0, microsecond=0)

    time_until_ten = (ten_pm - now).total_seconds()
    time_between = (ten_pm - created).total_seconds()
    time_since_created = (now - created).total_seconds()

    if time_until_ten < 0:
        return like_max
    else:
        return int((time_since_created / time_between) * like_max)




class GetPostSerializer(serializers.ModelSerializer):
    like_count = serializers.SerializerMethodField()

    def get_like_count(self, post):
        return get_like_count(post)

    class Meta:
        model = Post
        fields = (
            'id',
            'user',
            'created_ts',
            'url',
            'like_count',
        )


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = fields = '__all__'
