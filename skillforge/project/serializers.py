from rest_framework import serializers
from .models import JobPost
from accounts.models import ClientProfile

class JobPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPost
        fields = [
            'id', 'title', 'category', 'description', 
            'budget_type', 'budget_amount', 'skills_required', 
            'min_skill_score', 'status', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']

    def create(self, validated_data):
        # Initial create logic, client assignment happens in view
        return JobPost.objects.create(**validated_data)
