from rest_framework.decorators import api_view
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT
from rest_framework.views import APIView
from .models import Category
from .serializer import CategorySerializer


class Categories(APIView):
    def get(self, request):
        all_categories = Category.objects.all()
        serializer = CategorySerializer(all_categories, many=True)
        return Response(
            serializer.data,
        )

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            new_category = serializer.save()
            return Response(CategorySerializer(new_category).data)
        else:
            return Response(serializer.errors)


class CategoryDetail(APIView):
    def get_object(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            raise NotFound

    def get(self, request, pk):
        serializer = CategorySerializer(self.get_object(pk))
        return Response(serializer.data)

    def put(self, request, pk):
        category = Category.objects.get(pk=pk)
        serializer = CategorySerializer(
            self.get_object(pk),
            data=request.data,
            partial=True,
        )

        if serializer.is_valid():
            updated_caterogy = serializer.save()
            return Response(CategorySerializer(updated_caterogy).data)

        else:
            return Response(serializer.errors)

    def delete(self, request, pk):
        self.get_object(pk).delete()
        return Response(HTTP_204_NO_CONTENT)


""" @api_view(["GET", "POST"])
# Create your views here.
def categories(request):
    if request.method == "GET":
        all_categories = Category.objects.all()
        serializer = CategorySerializer(all_categories, many=True)
        return Response(
            serializer.data,
        )
    elif request.method == "POST":
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            new_category = serializer.save()
            return Response(CategorySerializer(new_category).data)
        else:
            return Response(serializer.errors) """


""" @api_view(["GET", "PUT", "DELETE"])
def category(request, pk):
    try:
        category = Category.objects.get(pk=pk)
    except Category.DoesNotExist:
        raise NotFound

    if request.method == "GET":
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    elif request.method == "PUT":
        category = Category.objects.get(pk=pk)
        serializer = CategorySerializer(
            category,
            data=request.data,
            partial=True,
        )

        if serializer.is_valid():
            updated_caterogy = serializer.save()
            return Response(CategorySerializer(updated_caterogy).data)

        else:
            return Response(serializer.errors)

    elif request.method == "DELETE":
        category.delete()
        return Response(HTTP_204_NO_CONTENT) """
