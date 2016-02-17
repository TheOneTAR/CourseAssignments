from django.shortcuts import render


# Create your views here.
def home_page(request):

   # Make Context dictionary
   context = {'title':'PUPPIES ARE THE BEST',
              'body_text': 'This is a well thought out argument on why Puppies will save all of humanity.',
              'reasons':['adorable', 'forgiving', 'nuturing', 'eliminate need for vacuums']}

   # return the rendered response
   return render(request, 'index.html', context)

def dinosaurs(request):
   return render(request, 'dinosaurs.html')