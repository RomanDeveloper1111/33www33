from rest_framework.views import APIView
from rest_framework import generics, status
from .models import Inputs
from .serializers import InputsSerializer
from rest_framework.response import Response
import json
from django.shortcuts import redirect


class InputsView(generics.ListAPIView):
    queryset = Inputs.objects.all()
    serializer_class = InputsSerializer


class AddInput(APIView):

    def post(self, request, format=None):
        get_input = Inputs.objects.all()
        if len(get_input) == 0:
            Inputs.objects.create(dates=json.dumps([{'title':request.data['text_input']}]))
            get_input = Inputs.objects.all()

        dates = json.loads(get_input[0].dates)
        dates.append({'title': request.data['text_input']})
        get_input[0].dates = json.dumps(dates)
        get_input[0].save()
        return Response({}, status=status.HTTP_200_OK)








