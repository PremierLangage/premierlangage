cat > ../../apps/components/templates/components/statics.html << ENDOFFILE
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.staticaly.com/gh/PremierLangage/components/master/dist/styles.css?env=dev"/>
<script src="https://cdn.staticaly.com/gh/PremierLangage/components/master/dist/polyfills-es5.js?env=dev" nomodule defer></script>
<script src="https://cdn.staticaly.com/gh/PremierLangage/components/master/dist/polyfills-es2015.js?env=dev" type="module"></script>
<script src="https://cdn.staticaly.com/gh/PremierLangage/components/master/dist/scripts.js?env=dev" defer></script>
<script src="https://cdn.staticaly.com/gh/PremierLangage/components/master/dist/runtime-es2015.js?env=dev" type="module"></script>
<script src="https://cdn.staticaly.com/gh/PremierLangage/components/master/dist/main-es2015.js?env=dev" type="module"></script>
<script src="https://cdn.staticaly.com/gh/PremierLangage/components/master/dist/runtime-es5.js?env=dev" nomodule defer></script>
<script src="https://cdn.staticaly.com/gh/PremierLangage/components/master/dist/main-es5.js?env=dev" nomodule defer></script>
ENDOFFILE

cat > src/environments/environments.prod.ts <<ENDOFILE
export const environment = {
  production: true,
  assets: '/static/components/assets',
  baseUrl: '/static/components'
};
ENDOFILE


sudo npm run build:prod
