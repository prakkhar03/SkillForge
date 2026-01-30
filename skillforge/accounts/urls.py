from django.urls import path
from .views import RegisterAPI, LoginAPI, OnboardingAPI

urlpatterns = [
    path("register/", RegisterAPI.as_view()),
    path("login/", LoginAPI.as_view()),
    path("onboarding/", OnboardingAPI.as_view()),
]
