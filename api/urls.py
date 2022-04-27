from django.urls import path
from .views import InputsView, AddInput

urlpatterns = [
    path('view-inputs', InputsView.as_view()),
    path('add', AddInput.as_view()),
]

