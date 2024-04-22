from .models import Produk
from .serializer import ProdukSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def getProduk(request, pk):
    queryset = Produk.objects.filter(category = pk)
    serializer = ProdukSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getDetail(request, pk):
    queryset = Produk.objects.get(pk = pk)
    serializer = ProdukSerializer(queryset)
    return Response(serializer.data)


@api_view(['GET'])
def getSimilar(request, pk):
    produk = Produk.objects.get(id = pk)
    produk_category = produk.category
    similar_produk = Produk.objects.filter(category = produk_category).exclude(id=pk)[:5]
    serializer = ProdukSerializer(similar_produk, many=True)
    return Response(serializer.data)