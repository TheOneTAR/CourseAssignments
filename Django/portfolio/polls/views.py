from django.shortcuts import render
from .models import Question, Choice

# Create your views here.

def questions(request):
   things = Question.objects.all()

   context = {'questions':things}

   return render(request, 'questions.html', context)


def single_question(request, question_id):

   question = Question.objects.get(id=question_id)


   choices = Choice.objects.filter(question=question)
   question.choices = choices


   context = {'question': question}

   return render(request, 'single_question.html', context)