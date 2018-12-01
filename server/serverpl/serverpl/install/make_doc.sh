# Should be use from directory containing manage.py 
cd apps/documentation/mkdocs
mkdocs build
cd -

if [ -d apps/documentation/static/ ]; then
    rm -Rf apps/documentation/static/
fi

mkdir -p apps/documentation/static/documentation

cp -r apps/documentation/mkdocs/custom/css apps/documentation/static/documentation/css
cp -r apps/documentation/mkdocs/custom/js apps/documentation/static/documentation/js
cp -r apps/documentation/mkdocs/custom/fonts apps/documentation/static/documentation/fonts
cp -r apps/documentation/mkdocs/custom/img apps/documentation/static/documentation/img
cp -r apps/documentation/mkdocs/docs/images/* apps/documentation/static/documentation/img/
