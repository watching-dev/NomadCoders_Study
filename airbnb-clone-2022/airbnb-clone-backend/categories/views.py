from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category


@api_view()
# Create your views here.
def categories(request):
    return Response(
        {
            "ok": True,
        },
    )
