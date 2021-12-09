from rest_framework import serializers
from .models import Actor, Movie, ActorMovieJunction

class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = "__all__"

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"

class ActorMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActorMovieJunction
        fields = "__all__"

