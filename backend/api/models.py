from django.db import models

# Create your models here.
class Actor(models.Model):
    name = models.CharField(max_length=500)
    dob = models.DateField()
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField()
    releaseDate = models.DateField()
    image = models.ImageField(null=True, blank=True)
    upvote = models.IntegerField(default=0)
    downvote = models.IntegerField(default=0)

    def __str__(self):
        return self.title

class ActorMovieJunction(models.Model):
    actor = models.ForeignKey(Actor, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

    def __str__(self):
        return (self.actor.name + " & " + self.movie.title)
