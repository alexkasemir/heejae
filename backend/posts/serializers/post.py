from django.utils import timezone

from rest_framework import serializers
from posts.models import Post


def get_like_count(like_max, time_since):
    hours = int(time_since // 3600)
    minutes = int((time_since % 3600) // 60)

    if hours >= 48:
        return like_max
    elif hours < 1:
        if minutes <= 10:
            return 0
        if minutes > 10 and minutes < 60:
            return int((1/60.0) * minutes * (like_max / 3))
        else:
            return int(like_max / 3)
    else:
        to_return = (2/141.0) * like_max * ((minutes / 60.0) - 48) + like_max
        return int(to_return)


class PostSerializer(serializers.ModelSerializer):
    like_count = serializers.SerializerMethodField()

    def get_like_count(self, post):
        now = timezone.now()
        created = post.created_ts
        return get_like_count(post.like_max, (now - created).total_seconds())

    class Meta:
        model = Post
        fields = (
            'id',
            'user',
            'created_ts',
            'url',
            'like_count',
        )
