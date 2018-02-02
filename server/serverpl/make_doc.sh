#Create 
cd documentation/mkdocs
mkdocs build
cd -

if [ -d documentation/static/ ]; then
    rm -R documentation/static/
fi

mkdir -p documentation/static/documentation

mv documentation/templates/documentation/doc/css documentation/static/documentation/css
mv documentation/templates/documentation/doc/js documentation/static/documentation/js
mv documentation/templates/documentation/doc/fonts documentation/static/documentation/fonts
mv documentation/templates/documentation/doc/img documentation/static/documentation/img
mv documentation/templates/documentation/doc/images documentation/static/documentation/images
