import { environment } from 'src/environments/environment';
import { isRoot } from './filters.model';
import { folderIcons } from 'src/app/shared/themes/theme.folders';
import { fileIcons } from 'src/app/shared/themes/theme.files';
import { Paths } from 'src/app/shared/utils/paths';
import { IResource, ResourceTypes } from './resources.model';
const BASE_DIR = environment.assets + '/icons/explorer/';

export function icon(input: IResource, expanded?: boolean): string {
    let path = '';
    if (input) {
        if (input.type === ResourceTypes.Folder) {
            const theme = folderIcons[0];
            path = BASE_DIR + theme.defaultIcon.name;
            if (isRoot(input)) {
                path = BASE_DIR + theme.rootFolder.name;
            } else {
                const file = theme.icons.find(item =>
                    item.folderNames.includes(input.name.toLowerCase())
                );
                if (file) {
                    path = BASE_DIR + file.name;
                }
            }
            if (expanded) {
                path += '-open';
            }
            path += '.svg';
        } else {
            const extension = Paths.extname(input.path);
            const file =
                fileIcons.icons.find(item => {
                    return (item.fileExtensions || []).includes(extension);
                }) || fileIcons.defaultIcon;
            path = BASE_DIR + file.name + '.svg';
        }
        return path;
    }
    return '';
}
