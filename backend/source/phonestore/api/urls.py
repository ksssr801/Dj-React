from django.conf.urls import url
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'phonestore', PhoneStoreViewSet)
urlpatterns = router.urls

# router = routers.SimpleRouter()
# router.register(r'phonestore', PhoneStoreListView)
# urlpatterns = router.urls
# urlpatterns = [
#     url('', PhoneStoreListView.as_view()),
#     url('<pk>', PhoneStoreDetailView.as_view())
# ]