from django.urls import path
from .views import get_books, create_book


urlpatterns = [
    path('books/', get_books, name='books'),
    path('books/create/', create_book, name='add_book')
    
]
