from rest_framework import serializers
from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    like_count = serializers.SerializerMethodField()

    def get_like_count(self, post):

        return 10

    class Meta:
        model = Post
        fields = (
            'id',
            'user',
            'created_ts',
            'url',
            'like_count',
        )
