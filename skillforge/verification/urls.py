from django.urls import path
from .views import *

urlpatterns = [
    path("generate-test/", GenerateSkillTestAPI.as_view()),
    path("submit-test/", SubmitSkillTestAPI.as_view()),
    path("personality/submit/", SubmitPersonalityAPI.as_view()),

]
