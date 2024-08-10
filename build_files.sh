pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
