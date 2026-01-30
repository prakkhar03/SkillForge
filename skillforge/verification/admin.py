from django.contrib import admin
from .models import (
    PersonalityTest,
    PersonalityQuestion,
    PersonalityOption
)


class PersonalityOptionInline(admin.TabularInline):
    model = PersonalityOption
    extra = 3


class PersonalityQuestionInline(admin.TabularInline):
    model = PersonalityQuestion
    extra = 3


@admin.register(PersonalityTest)
class PersonalityTestAdmin(admin.ModelAdmin):
    inlines = [PersonalityQuestionInline]
