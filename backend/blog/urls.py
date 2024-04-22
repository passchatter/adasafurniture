from django.urls import path
from . import views

urlpatterns = [
    path('', views.GetBlog, name="getblog"),
    path('detail/<int:pk>/', views.getDetailBlog, name="detailblog"),
    path('contact/', views.contactForm, name="contactform"),
    path('sendemail/', views.SendEmail.as_view(), name='sendemail')
]