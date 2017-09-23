from rest_framework import viewsets, mixins
from rest_framework.response import Response

from workouts.models import Workout
from workouts.serializers.workout import WorkoutSerializer


class WorkoutViewSet(mixins.RetrieveModelMixin,
                  mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
