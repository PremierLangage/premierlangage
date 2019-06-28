import os

paths = os.listdir('./explorer')

folders = sorted([e for e in paths if e.startswith('folder') and not e.endswith('-open.svg')])
files = sorted([e for e in paths if not e.startswith('folder')])
icons = sorted([e for e in paths if not e.endswith('-open.svg')])


with open('file.ts', 'w') as f:
    f.write('const ICONS = [\n')
    for icon in icons:
        base = os.path.basename(icon)
        f.write('   {\n')
        f.write("       path: '%s',\n" % base)
        if icon.startswith('folder'):
          name = base[7:-4]
          f.write("       name: '%s',\n" % name)
          f.write('       folder: true\n')
        else:
          name = base[:-4]
          f.write("       name: '%s',\n" % name)
          f.write('       folder: false\n')
        f.write('   },\n')
    f.write('];\n')
