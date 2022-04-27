from rest_framework import serializers
from .models import Inputs


class InputsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inputs
        fields = ('dates',)
