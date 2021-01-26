cat > ../../apps/components/templates/components/statics.html << ENDOFFILE
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="{{ static('/components/runtime.js') }}" type="module"></script>
<script src="{{ static('/components/polyfills.js') }}" type="module"></script>
<script src="{{ static('/components/styles.js') }}" type="module"></script>
<script src="{{ static('/components/scripts.js') }}" defer></script>
<script src="{{ static('/components/vendor.js') }}" type="module"></script>
<script src="{{ static('/components/main.js') }}" type="module"></script>
ENDOFFILE

cat > src/environments/environments.ts <<ENDOFILE
export const environment = {
  production: false,
  assets: '/static/components/assets',
  baseUrl: '/static/components'
};
ENDOFILE

sudo npm run build:dev
