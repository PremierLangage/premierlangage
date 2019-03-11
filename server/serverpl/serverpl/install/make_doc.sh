# Should be use from directory containing manage.py 
cd documentation/mkdocs
mkdocs build
cd -

if [ -d documentation/static/ ]; then
    rm -Rf documentation/static/
fi

mkdir -p documentation/static/documentation

cp -r documentation/mkdocs/custom/* documentation/static/documentation/
cp -r documentation/mkdocs/docs/images/* documentation/static/documentation/img/
