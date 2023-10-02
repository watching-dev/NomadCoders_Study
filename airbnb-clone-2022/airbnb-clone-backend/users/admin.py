from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

@admin.register(User)
# Register your models here.
class CustomUserAdmin(UserAdmin):
    pass