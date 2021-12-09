from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Actor, Movie, ActorMovieJunction
from .serializers import ActorSerializer, MovieSerializer, ActorMovieSerializer


class ActorAPIView(APIView):
    def get(self, request):
        actors = Actor.objects.all()
        serializer = ActorSerializer(actors, many=True)
        return Response(serializer.data)

class MovieAPIView(APIView):
    def get(self, request):
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)
    
    def put(self, request, id):
        movie = Movie.objects.get(pk=id)
        serializer = MovieSerializer(movie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg": "Success"})
        return Response({"msg": "Some error occured!"})

class ActorMovieAPIView(APIView):
    def get(self, request, id):
        actor = Actor.objects.get(pk=id)
        movies = actor.actormoviejunction_set.all()
        serializer = ActorMovieSerializer(movies, many=True)
        return Response(serializer.data)

class MovieActorAPIView(APIView):
    def get(self, request, id):
        movie = Movie.objects.get(pk=id)
        actors = movie.actormoviejunction_set.all()
        serializer = ActorMovieSerializer(actors, many=True)
        return Response(serializer.data)