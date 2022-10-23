from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50, verbose_name="Category")


    def __str__(self):
        return self.name


    class Meta:
        verbose_name="Category"
        verbose_name_plural="Categories"


class Campaigns(models.Model):
    name=models.CharField(verbose_name="Name of campaign", max_length=100)
    description=models.CharField(max_length=5000, verbose_name="Description of Campaign goal")
    oraganizer_address=models.CharField(verbose_name="Head of company address", max_length=62)
    goal=models.BigIntegerField(verbose_name="Amount of money to collect")
    created_at=models.DateTimeField(auto_now_add=True, verbose_name="Created date")
    updated_at=models.DateTimeField(auto_now=True, verbose_name="Updated date")
    photo=models.ImageField(upload_to="photos/%Y/%m/%d", verbose_name="Photo", help_text="Optional", blank=True)
    is_active=models.BooleanField(default=True, verbose_name="Is active?")
    category=models.ForeignKey(Category, on_delete=models.PROTECT, null=True)
    ends_at=models.DateField(verbose_name="Deadline for campaign")


    def __str__(self):
        return self.name

    
    class Meta:
        verbose_name="Campaign"
        verbose_name_plural="Campaigns"
        ordering=['-created_at']

