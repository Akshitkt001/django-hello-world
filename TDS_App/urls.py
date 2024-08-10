from django.urls import path
from .import views
from django.conf.urls.static import static
from django.conf import settings
from .views import upload_profile_picture
urlpatterns = [
    path('', views.Home, name='index'),
    path('Home', views.Home, name='Home'),
    path('profile', views.profile, name='profile'),
    path('Add_App', views.Add_App, name='Add_App'),
    path('task', views.task, name='task'),
    path('<int:App_id>/',views.submit_img, name='submit_img'),
    path('points', views.points, name='points'),
    path('login', views.login, name='login'),
    path('register', views.register, name='register'),
    path('logout', views.logout, name='logout'),
    path('upload-profile-picture/', upload_profile_picture, name='upload_profile_picture'),

]

urlpatterns =urlpatterns + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

