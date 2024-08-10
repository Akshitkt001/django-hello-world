from django.db import models
from django.contrib.auth.models import User
class AppDetails(models.Model):
    AppIcon = models.ImageField(upload_to='AppIcons')
    AppName = models.CharField(max_length=100)
    AppLink = models.CharField(max_length=100)
    AppCategory = models.CharField(max_length=100)
    AppSubCategory = models.CharField(max_length=100)
    points = models.PositiveIntegerField()

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profile_pictures/', default='profile_pictures/default.png')