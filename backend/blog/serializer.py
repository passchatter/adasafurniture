from rest_framework import serializers
from .models import Blog, BlogEntry

class BlogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogEntry
        fields = ('id','blog','deskripsi', 'order', 'image')

class BlogSerializers(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id', 'title', 'subtitle', 'tanggal')
       
class ContactSerializer(serializers.Serializer):
    from_email = serializers.EmailField()
    subject = serializers.CharField()
    message = serializers.CharField()