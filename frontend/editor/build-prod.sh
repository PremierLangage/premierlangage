cat > ../../apps/editor/templates/editor/statics.html << ENDOFFILE
<link rel="stylesheet" href="{{ static('/editor/styles.css') }}"/>
<script src="{{ static('/editor/polyfills-es5.js') }}" nomodule defer></script>
<script src="{{ static('/editor/polyfills-es2015.js') }}" type="module"></script>
<script src="{{ static('/editor/runtime-es2015.js') }}" type="module"></script>
<script src="{{ static('/editor/main-es2015.js') }}" type="module"></script>
<script src="{{ static('/editor/runtime-es5.js') }}" nomodule defer></script>
<script src="{{ static('/editor/main-es5.js') }}" nomodule defer></script>
ENDOFFILE
sudo npm run build:prod
