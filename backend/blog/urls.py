from django.urls import path
from . import views

urlpatterns = [
    path('blog/list/', views.GetBlog, name="getblog"),
    path('blog/detail/<int:pk>/', views.getDetailBlog, name="detailblog"),
    path('contact/', views.contactForm, name="contactform"),
    path('/blog/sendemail/', views.SendEmail.as_view(), name='sendemail')
]