from rest_framework import serializers
from api.models import Vacancy, Company


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Company.objects.create(name=validated_data['name'])
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance


class Vacancy2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description')


class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class VacancySerializer(serializers.ModelSerializer):
    category = CompanySerializer2(read_only=True, many=False)
    # category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Vacancy
        fields = '__all__'
