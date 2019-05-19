from phonestore.models import PhoneStore
from .serializers import PhoneStoreSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action, list_route

class PhoneStoreViewSet(viewsets.ModelViewSet):
    queryset = PhoneStore.objects.all()
    serializer_class = PhoneStoreSerializer

    @action(methods=['get'], detail=False, url_path='products')
    def get_product_list(self, request):
        # print "request==>",request.GET
        response = [
            {
                'id': 1,
                'title': "Realme 3",
                'img': "img/realme-3.png",
                'price': 9999,
                'company': "Realme",
                'info': "Information about Realme 3.",
                'inCart': False,
                'count': 0,
                'total': 0,
                'tax': 99,
            },
            {
                'id': 2,
                'title': "Redmi Note 7",
                'img': "img/redmi-note-7.png",
                'price': 11999,
                'company': "Xiaomi",
                'info': "Information about Redmi Note 7.",
                'inCart': False,
                'count': 0,
                'total': 0,
                'tax': 199,
            },
        ]
        return Response(response, status=status.HTTP_200_OK)
