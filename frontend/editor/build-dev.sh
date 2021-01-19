cat > ../../apps/editor/templates/editor/statics.html << ENDOFFILE
<script src="{{ static('/editor/runtime.js') }}" type="module"></script>
<script src="{{ static('/editor/polyfills.js') }}" type="module"></script>
<script src="{{ static('/editor/styles.js') }}" type="module"></script>
<script src="{{ static('/editor/vendor.js') }}" type="module"></script>
<script src="{{ static('/editor/main.js') }}" type="module"></script>
ENDOFFILE
sudo npm run build:watch
