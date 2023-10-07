from django.contrib import admin
from .models import Wishlist


@admin.register(Wishlist)
# Register your models here.
class WishlistAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "user",
        "created_at",
        "updated_at",
    )
