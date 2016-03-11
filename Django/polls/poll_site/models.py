from django.db import models

# Create your models here.

class Question(models.Model):
   """Defines the Question class and model."""

   # Define the attributes of the Question Model,
   # that are stored in the database
   question_text = models.CharField(max_length=200)
   pub_date = models.DateTimeField('date published')

   def __str__(self):
      return self.question_text

class Choice(models.Model):
   """Defines the Choice class and model."""

   choice_text = models.CharField(max_length=150)
   votes = models.PositiveSmallIntegerField(default=0)

   # Estabish the relationship between Question and Choice
   question_id = models.ForeignKey(Question)

   def __str__(self):
      return self.choice_text