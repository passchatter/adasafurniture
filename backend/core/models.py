from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Produk(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    size = models.CharField(max_length=100, null=True)
    material = models.CharField(max_length=100, null=True)
    finising = models.CharField(max_length=100, null=True)
    image = models.ImageField(upload_to='images')

    def __str__(self):
        return self.name
