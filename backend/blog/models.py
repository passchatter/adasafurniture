from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    tanggal = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class BlogEntry(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    deskripsi = models.TextField()
    order = models.IntegerField(default=0);
    image = models.ImageField(upload_to='blog')

    class Meta:
         ordering = ['order']
        
    def __str__(self):
        return f"entry for {self.blog.title} - order {self.order}"



