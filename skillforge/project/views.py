from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import JobPost
from .serializers import JobPostSerializer
from accounts.models import ClientProfile

class CreateJobAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        # Verify user is a client
        if request.user.role != 'client':
            return Response({"error": "Only clients can post jobs"}, status=403)
        
        try:
            client_profile = request.user.client_profile
        except ClientProfile.DoesNotExist:
             return Response({"error": "Client profile not found"}, status=404)

        serializer = JobPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(client=client_profile)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ClientJobsAPI(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if request.user.role != 'client':
             return Response({"error": "Unauthorized"}, status=403)
             
        try:
            client_profile = request.user.client_profile
            jobs = JobPost.objects.filter(client=client_profile).order_by('-created_at')
            serializer = JobPostSerializer(jobs, many=True)
            return Response(serializer.data)
        except ClientProfile.DoesNotExist:
            return Response([], status=200)
