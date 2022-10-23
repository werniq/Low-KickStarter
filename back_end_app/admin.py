from django.contrib import admin
from .models import *


class AdminCampaigns(admin.ModelAdmin):
    list_display = ('id', 'name', 'created_at', 'photo', 'is_active', 'category', 'ends_at')
    search_fields = ('organizer', 'id', 'name')


class AdminCategory(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name', )

admin.site.register(Campaigns, AdminCampaigns)
admin.site.register(Category, AdminCategory)


# Register your models here