from django.shortcuts import render, redirect
from .models import Campaigns, Category
from .forms import *
from django.core.paginator import Paginator
from django.views.generic import ListView, DetailView, CreateView
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import login, logout

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Succesfully registered")
            return redirect('home')
        else:
            messages.error(request, "Register Error")
    else:
        form = UserRegisterForm()
    categories = Category.objects.all()
    return render(request, 'back_end_app/register.html', {
            "form": form,
            "categories": categories
            })


def user_login(request):
    if request.method == "POST":
        form = UserLoginForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')
        else:
            form = UserLoginForm()
        categories = Category.objects.all()
        return render(request, 'back_end_app/login.html', {
            "categories" : categories,
            "form": form
        })


def user_logout(request):
    logout(request)
    return redirect('home')


class HomeList(ListView):
    model = Campaigns
    template_name = 'campaigns_list.html'
    context_object_name = "campaigns"
    categories = Category.objects.all()
    extra_context = {'title': "Home page", "categories" : categories}
    paginate_by = 4


    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = "Home page"
        return context


    def get_queryset(self):
        return Campaigns.objects.filter(is_active=True)



class CampaignsByCategory(ListView):
    model = Campaigns
    template_name = "back_end_app/campaigns_list.html"
    context_object_name = "campaigns"
    categories = Category.objects.all()
    extra_context = {
        'title': "Home page",
        'categories': categories
    }

    allow_empty = False

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = Category.objects.get(pk=self.kwargs['category_id'])
        return context


    def get_queryset(self):
        return Campaigns.objects.filter(category_id=self.kwargs['category_id'], is_published=True)



class ViewCampaigns(DetailView):
    model = Campaigns
    categories = Category.objects.all()
    extra_context = {'categories': categories}
    template_name = 'back_end_app/detailed_campaign.html'
    context_object_name = 'campaign_item'


class CreateCampaign(CreateView):
    form_class = CampaignForm
    categories = Category.objects.all()
    extra_context = {'categories': categories}
    template_name = 'back_end_app/create_campaign.html'