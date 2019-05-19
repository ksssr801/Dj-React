# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class PhoneStore(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=120)
    img = models.CharField(max_length=255)
    price = models.IntegerField()
    company = models.CharField(max_length=120)
    info = models.CharField(max_length=255)
    in_cart = models.BooleanField(default=False)
    count = models.IntegerField()
    total = models.IntegerField()
    tax = models.IntegerField()

    def __str__(self):
        return self.id
        
    class Meta:
        db_table = 'tblproducts'
