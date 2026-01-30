from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User, StudentProfile, ClientProfile



class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["email", "password", "role"]

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User.objects.create_user(**validated_data)
        user.set_password(password)
        user.save()
        return user



class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(email=data["email"], password=data["password"])
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        data["user"] = user
        return data



class StudentOnboardingSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = [
            "full_name",
            "location",
            "bio",
            "education",
            "experience_level",
            "github_url",
            "portfolio_links",
            "skills",
            "resume",
        ]

        extra_kwargs = {
            "full_name": {"required": True},
            "skills": {"required": True},
            "education": {"required": True},
        }



class ClientOnboardingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientProfile
        fields = [
            "company_name",
            "industry",
            "website",
            "address",
        ]

        extra_kwargs = {
            "company_name": {"required": True},
        }
