from django.contrib import admin
from django.urls import path

from api.views import *

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', vacancies_top_ten),
    path('list/all/company/',GetListAllCompany.as_view()),
    path('list/all/vacancy/',GetListAllVacancy.as_view()),
    path('list/all/companyvacancy/',GetListVacancy.as_view()),
    path('list/all/companydata/',GetListAllCompanyData.as_view())
]