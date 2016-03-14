from django.shortcuts import render, get_object_or_404
from django.http.response import HttpResponse
from django.http import JsonResponse

import json

from .models import Question, Choice

# Create your views here.

def hello_world(request):
   # View controllers must always take at least a HttpRequest
   content = "<h1 style='color:green'>Hello World</h1>"

   # Always need to return a HttpResponse
   return HttpResponse(content)

def hello_world_render(request):
   
   questions = Question.objects.all()
   print(questions)

   print(questions[0].id)
   print(questions[0].question_text)
   print(questions[0].pub_date)

   context = {
      'questions': questions,
      'name': "Ichi",
      'fav_color': "whatever",
      'toys': [
         'tennis ball',
         'dodo',
         'wuuba',
         'rope',
         'piggy',
         'birdie',
         'frog',
         'fire hose'
      ]
   }

   #return a HttpResponse object, using the render function
   return render(request, 'poll_site/index.html', context)

def corgi_page(request):
   return render(request, 'poll_site/corgis.html')

def question_details(request, question_id):

   print("Passed question:", question_id)

   question = get_object_or_404(Question, pk=question_id)

   context = {
      'question': question,
   }

   return render(request, 'poll_site/question_details.html', context)


def submit_vote(request):
   """Handles vote submissions via AJAX"""

   if request.method == 'POST':
      
      # Decode request body from bytecode to normal
      data_json = request.body.decode('utf-8')

      # Convert data from string to object
      data = json.loads(data_json)

      # Get the choice at that id
      choice = Choice.objects.get(pk=int(data['choice_id']))

      # Increment the votes of the choice by 1
      choice.votes += 1

      # Save the updated object choice to the database
      choice.save()

      # Get all the choices for the question just voted on
      question = Question.objects.get(pk=int(data['question_id']))
      question_choices = question.choice_set.all()

      # Build the response data
      response = []

      # Loop through the choices and add them to a dictionary
      for choice in question_choices:
         c_dict = {
            'id': choice.id,
            'text': choice.choice_text,
            'votes': choice.votes
         }
         response.append(c_dict)

   return JsonResponse({'data': response})




















