from django.shortcuts import render

# Create your views here.

# View Controller, must take a request
def angry(request):


   # Must return an HTTP Response
   # remember: the render function will return an HTTPResponse
   return render(request, 'Angry_Dice.html')