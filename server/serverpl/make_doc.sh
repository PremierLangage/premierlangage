#Create 
cd documentation/mkdocs
mkdocs build
cd -

if [ -d documentation/static/ ]; then
    rm -Rf documentation/static/
fi

mkdir -p documentation/static/documentation

cp -r documentation/mkdocs/custom/css documentation/static/documentation/css
cp -r documentation/mkdocs/custom/js documentation/static/documentation/js
cp -r documentation/mkdocs/custom/fonts documentation/static/documentation/fonts
cp -r documentation/mkdocs/custom/img documentation/static/documentation/img
