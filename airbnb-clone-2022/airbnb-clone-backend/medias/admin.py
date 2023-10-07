from django.contrib import admin
from .models import Photo, Video


@admin.register(Photo)
# Register your models here.
class PhotoAdmin(admin.ModelAdmin):
    pass


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    pass
