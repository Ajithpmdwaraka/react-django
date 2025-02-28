from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Book
from .serializers import BookSerializer


@api_view(['GET'])
def get_books(request):
    books = Book.objects.all()
    serialized_data = BookSerializer(books, many=True)
    return Response(serialized_data.data)


@api_view(['POST'])
def create_book(request):
    serializer = BookSerializer(data=request.data)  # ✅ Removed `many=True`
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
