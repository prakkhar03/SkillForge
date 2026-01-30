from django.urls import path
from .views import CreateJobAPI, ClientJobsAPI

urlpatterns = [
    path('create/', CreateJobAPI.as_view(), name='create-job'),
    path('my-jobs/', ClientJobsAPI.as_view(), name='client-jobs'),
]