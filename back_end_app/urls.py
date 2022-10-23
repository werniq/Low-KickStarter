from django.urls import path
from .views import *

urlpatterns = [
    path('sign_up/', register, name="register"),
    path('', HomeList.as_view(), name="home"),
    path('login/', user_login, name="login"),
    path('logout/', user_logout, name="logout"),
    path('category/<int:pk>', CampaignsByCategory.as_view(), name="category"),
    path('campaigns/<int:pk>', ViewCampaigns.as_view(), name="campaigns"),
    path('start_campaign/', CreateCampaign.as_view(), name="create_campaign")
]