from django.urls import path
from .views import ActorAPIView, MovieAPIView, ActorMovieAPIView, MovieActorAPIView

urlpatterns = [
    path("get-actors-list/", ActorAPIView.as_view(), name="get-actors-list"),
    path("get-movies-list/", MovieAPIView.as_view(), name="get-movies-list"),
    path("get-movies-list-actor/<int:id>", ActorMovieAPIView.as_view(), name="get-movies-list-actor"),
    path("get-actors-list-movie/<int:id>", MovieActorAPIView.as_view(), name="get-actors-list-movie"),
    path("update-movie/<int:id>", MovieAPIView.as_view(), name="update-movie"),
]
