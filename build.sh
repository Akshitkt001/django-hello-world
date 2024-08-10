#!/bin/bash

# Install dependencies
pip install -r requirements.txt

# Run migrations to create necessary database tables
python manage.py migrate --no-input

# Create a superuser without prompts (only if the superuser isn't already created)
if [ ! -z "$DJANGO_SUPERUSER_USERNAME" ] && [ ! -z "$DJANGO_SUPERUSER_EMAIL" ] && [ ! -z "$DJANGO_SUPERUSER_PASSWORD" ]; then
  python manage.py createsuperuser --no-input --username $DJANGO_SUPERUSER_USERNAME --email $DJANGO_SUPERUSER_EMAIL || true
fi

# Collect static files (optional, if needed)
python manage.py collectstatic --noinput
