from django.contrib import admin
from django.conf.urls import include, url
# from rest_framework.authtoken.views import obtain_auth_token
# from rest_framework_simplejwt import views as jwt_views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url('api-auth/', include('rest_framework.urls')),
    url('admin/', admin.site.urls),
    url('myapi/', include('phonestore.myapi.urls')),
    url('token-auth/', obtain_jwt_token)
    # url('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    # url('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # url('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
