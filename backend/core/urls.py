from django.urls import path
from .views import getProduk, getDetail, getSimilar

urlpatterns = [
    path('produks/<int:pk>/', getProduk, name="getProduk" ),
    path('produks/detail/<int:pk>/', getDetail, name="getDetail" ),
    path('produks/similar/<int:pk>/', getSimilar, name="getSimilar" ),
]