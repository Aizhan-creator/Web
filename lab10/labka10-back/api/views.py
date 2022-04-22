from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy
import json
from django.views.decorators.csrf import csrf_exempt
from api.serializers import CompanySerializer, Vacancy2Serializer, VacancySerializer, CompanySerializer2
from rest_framework import generics

# Create your views here.
class GetListAllCompany(generics.ListAPIView):
    serializer_class = CompanySerializer

    def get_queryset(self):
        return Company.objects.all()


class GetListAllCompanyData(generics.ListAPIView):
    serializer_class = CompanySerializer2
    def get_queryset(self):
        return Company.objects.all()

class GetListAllVacancy(generics.ListAPIView):
    serializer_class = Vacancy2Serializer

    def get_queryset(self):
        return Company.objects.all()

class GetListVacancy(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.all()

@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe = False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            comp_name = data.get('name')
            comp_desc = data.get('description')
            comp_city = data.get('city')
            comp_addr = data.get('address')
            comp_data = {
                'name': comp_name,
                'description': comp_desc,
                'city': comp_city,
                'address': comp_addr
            }
            company = Company.objects.create(**comp_data)
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(company.to_json())

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(company.to_json())

def company_vacancies(request, id):
    try:
        vacancies = Vacancy.objects.filter(company = id)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(vacancy.to_json())

def vacancies_top_ten(request):
    vacancies = Vacancy.objects.order_by("-salary")[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
