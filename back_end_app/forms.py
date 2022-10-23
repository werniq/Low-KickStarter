from django import forms
from .models import Campaigns
import re
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User

class UserLoginForm(AuthenticationForm):
    username = forms.CharField(max_length=100, label="Username", widget=forms.TextInput(attrs={
        "class": 'form-control'
        }))
    password = forms.CharField(label="Password", widget=forms.PasswordInput(attrs={'class' : 'form-control'}))



class UserRegisterForm(UserCreationForm):
    username = forms.CharField(max_length=100, label="Usermame", widget=forms.TextInput(attrs={
        'class': 'form-control'
    }))
    email = forms.EmailField(label="Email", widget=forms.EmailInput(attrs={
        'class': 'form-control'
    }))
    password1 = forms.CharField(label="Password", widget=forms.PasswordInput(attrs={
        'class': 'form-control'
    }))
    password2 = forms.CharField(label="Confirm Password", widget=forms.PasswordInput(attrs={
        'class': 'form-control'
    }))


    class Meta:
        model = User
        fields ='__all__'
        widgets= {
            'username': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            'password1': forms.PasswordInput(attrs={'class': 'form-control'}),
            'password2': forms.PasswordInput(attrs={'class': 'form-control'})
        }



class CampaignForm(forms.ModelForm):
    class Meta:
        model = Campaigns
        fields = ['name', 'goal', 'photo', 'category']
        # name=models.CharField(verbose_name="Name of campaign", max_length=100)
        # goal=models.BigInterField(verbose_name="Amount of money to collect")
        # photo=models.ImageField(upload_to="photos/%Y/%m/%d", verbose_name="Photo", help_text="Optional", blank=True)
        # category=models.ForeignKey(Category, on_delete=models.PROTECT, null=true)