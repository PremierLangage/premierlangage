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

find documentation/templates -type f -name '*.html' -exec sed -i "s#../search/main.js#search/main.js#g" {} +
find documentation/templates -type f -name '*.html' -exec sed -i "s#search/main.js#{% static 'documentation/search/main.js' %}#g" {} +
find documentation/static -type f -name '*main.js' -exec sed -i "s#search/worker.js#../static/documentation/search/worker.js#g" {} +
