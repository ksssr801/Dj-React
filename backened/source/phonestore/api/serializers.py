from rest_framework import serializers

from phonestore.models import PhoneStore

class PhoneStoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneStore
        fields = ('id', 'title', 'img', 'price', 'company', 'info', 'in_cart', 'count', 'total', 'tax')