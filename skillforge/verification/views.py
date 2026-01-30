from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .services import *

class GenerateSkillTestAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        category_id = request.data.get("category_id")

        if not category_id:
            return Response(
                {"error": "category_id required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        attempt = generate_skill_test_for_student(
            request.user.id,
            category_id
        )

        return Response({
            "attempt_id": attempt.id,
            "questions": attempt.generated_questions
        })




class SubmitSkillTestAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        attempt_id = request.data.get("attempt_id")
        answers = request.data.get("answers")

        if not attempt_id or not answers:
            return Response(
                {"error": "attempt_id and answers required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        result = submit_skill_test(
            student_id=request.user.id,
            attempt_id=attempt_id,
            answers=answers
        )

        return Response(result)

class SubmitPersonalityAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        result = submit_personality_assessment(
            request.user.id,
            request.data["test_id"],
            request.data["answers"]
        )
        return Response(result)
