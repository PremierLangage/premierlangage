rm */migrations/00*
rm db.sqlite3
python3 manage.py makemigrations
python3 manage.py migrate
