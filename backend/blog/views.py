from .models import Blog, BlogEntry
from .serializer import BlogSerializers, BlogEntrySerializer, ContactSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework import status
from django.core.mail import send_mail



@api_view(['GET'])
def GetBlog(request):
    blogs = Blog.objects.all()
    blog_data = []
    for blog in blogs:
        entry = BlogEntry.objects.filter(blog=blog, order=1).first()
        blogserializer = BlogSerializers(blog)
        entryserializer = BlogEntrySerializer(entry)
        blog_data.append({
            'blog':blogserializer.data,
            'entry': entryserializer.data if entry else None
        })
    return Response(blog_data)

@api_view(['GET'])
def getDetailBlog(request, pk):
    blog = Blog.objects.get(pk=pk)
    blog_detail = []
    entry = BlogEntry.objects.filter(blog=blog)
    blogserializer = BlogSerializers(blog)
    entryserializer = BlogEntrySerializer(entry, many=True)
    blog_detail.append({
        'blog':blogserializer.data,
        'entry':entryserializer.data
    })

    return Response(blog_detail)

def contactForm(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        send_mail(
            'Contact Form Message',
            f'Name: {name}\nEmail: {email}\nMessage: {message}',
            email,
            ['pastikaerror2625@gmail.com'],
            fail_silently=False
        )
        return HttpResponse("Email sent successfully!")
    return HttpResponse()


class SendEmail(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            to_email = 'adasabalifurniture@gmail.com'
            subject = serializer.validated_data['subject']
            message = serializer.validated_data['message']
            from_email = serializer.validated_data['from_email']
            send_mail(subject, message, from_email, [to_email])
            return Response({'message':'Email sent successfully'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)