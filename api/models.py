from django.db import models


class Inputs(models.Model):
    dates = models.JSONField(null=True, verbose_name='Данные')
