mv gitload/migrations/000?_add* gitload/
mv sandbox/migrations/000?_add* sandbox/
mv classmanagement/migrations/000?_add* classmanagement/
rm */migrations/000*
rm db.sqlite3
python3 manage.py makemigrations
mv gitload/000?_add* gitload/migrations/
mv sandbox/000?_add* sandbox/migrations/
mv classmanagement/000?_add* classmanagement/migrations/
python3 manage.py migrate
