from django.db import models
from django.contrib.auth.models import User
# Create your models here.
WORD_TYPES = (
    ('Verb Tense Marker', )
)
class Chinese(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    word = models.CharField(max_length=50)
    image = models.ImageField(null=True, blank=True)
    category = models.CharField