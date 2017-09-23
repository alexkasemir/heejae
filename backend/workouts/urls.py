from django.conf.urls import url, include
from rest_framework import routers

from workouts.viewsets.workout import WorkoutViewSet

router = routers.DefaultRouter()


# Used to simplify registering endpoints
def register(route, viewset, *args, **kwargs):
    router.register(route, viewset, *args, **kwargs)

# Register your API endpoints here, example:
# register(r'name_of_endpoint_link', YourViewSet)
register(r'workouts', WorkoutViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
