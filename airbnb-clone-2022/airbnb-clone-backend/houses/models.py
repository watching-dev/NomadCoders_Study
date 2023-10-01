from django.db import models

# Create your models here.
class House(models.Model):

    """ House Model """
    """ Model Definition for Houses """
    """ 여기에 작성하고 저장해도 장고는 알지 못함 """
    """ 장고도 이 어플리케이션이 있다는걸 알려줘야 저장했을때 자동으로 재시작됨 """
    """ config -> settings.py -> INSTALLED_APPS -> houses.apps.HousesConfig 입력 후 저장하면 인식 됨 """

    name = models.CharField(max_length=140)
    price_per_night = models.PositiveIntegerField()
    description = models.TextField()
    address = models.CharField(max_length=140)
    pets_allowed = models.BooleanField(default=True)