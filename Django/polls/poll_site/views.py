from django.shortcuts import render, get_object_or_404
from django.http.response import HttpResponse

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


















