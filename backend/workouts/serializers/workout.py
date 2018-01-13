from rest_framework import serializers
from workouts.models import Workout


class WorkoutSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(default=serializers.CurrentUserDefault(), read_only=True)

    class Meta:
        model = Workout
        fields = '__all__'
