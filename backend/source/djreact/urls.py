from django.contrib import admin
from django.conf.urls import include, url
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    url('api-auth/', include('rest_framework.urls')),
    url('admin/', admin.site.urls),
    url('api/', include('phonestore.api.urls')),
    url('api-token-auth/', obtain_auth_token, name='api_token_auth')
]
