from django.db import models

# Create your models here.


class todo(models.Model):
    title = models.CharField(max_length=50, blank=False)
    description = models.TextField(blank = True)
    date = models.DateField(blank = False)
    completed = models.BooleanField(default=False)
     
     
    
    def __str__(self):
        return self.title