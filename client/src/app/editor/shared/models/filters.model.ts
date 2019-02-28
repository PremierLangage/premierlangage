import { Resource } from './resource.model';
import { IEditorDocument } from '../services/core/opener.service';
import { IEditorGroup } from './editor-group.model';

const ICONS = {
    'css': 'fab fa-css3',
    'scss': 'fab fa-css3',
    'js': 'fab fa-js-square',
    'ts': 'fab fa-file-code',
    'html': 'fab fa-html5',
    'py': 'fab fa-python',
    'md': 'fab fa-markdown',
    'c': 'fas fa-file-code',
    'cpp': 'fas fa-code',
    'h': 'fas fa-code',
    'pdf': 'fas fa-file-pdf',
    'csv': 'fas fa-file-csv',
    'xls': 'fas fa-file-pdf',
    'java': 'fab fa-java',
    'cs': 'fas fa-code',
    'pl': 'fas fa-code',
    'pltp': 'fas fa-code',
    'png': 'fas fa-file-image',
    'jpg': 'fas fa-file-image',
    'svg': 'fas fa-file-image',
};

export const DISALLOWED_CHAR = ['/', ' ', '\t', '\n', ';', '#', '+', '&'];

export function findIcon(item: Resource) {
    const ext = extension(item);
    if (ext in ICONS) {
        item.icon = ICONS[ext];
    }
}

export function canRead(item: Resource) {
    return item && item.read;
}

export function canWrite(item: Resource) {
    return item &&  item.write;
}

export function readonly(item: Resource) {
    return !canWrite(item);
}

export function isFolder(item: Resource) {
    return item &&  item.type === 'folder';
}

export function isFile(item: Resource) {
    return item &&  item.type === 'file';
}

export function isRoot(item: Resource) {
    return item &&  item.name === 'home' || item.name === 'home/'
    || item.name === 'lib' || item.name === 'lib/';
}

export function isPl(item: Resource) {
    return extension(item) === 'pl';
}

export function isMarkdown(item: Resource) {
    return extension(item) === 'md';
}

export function isPltp(item: Resource) {
    return extension(item) === 'pltp';
}

export function isSVG(item: Resource) {
    return extension(item) === 'svg';
}

export function canBePreviewed(item: Resource) {
    return isPl(item) || isSVG(item) || isMarkdown(item);
}

export function isHome(item: Resource) {
    return item && item.name === 'home';
}

export function isNotRoot(item: Resource) {
    return !isRoot(item);
}


export function fromServer(resource: Resource) {
    return !resource.meta || resource.meta.downloadUrl;
}

export function isRepo(item: Resource) {
    return item && item.repo;
}

export function canAddFile(item: Resource) {
    return canWrite(item) && isFolder(item);
}

export function canCopy(item: Resource) {
    return canRead(item) && isNotRoot(item);
}

export function canAddFolder(item: Resource) {
    return canWrite(item) && isFolder(item);
}

export function canBeRenamed(item: Resource) {
    return !item.opened && canWrite(item) && !isRoot(item);
}

export function canBeDeleted(item: Resource) {
    return !item.opened && canWrite(item) && isNotRoot(item);
}

export function canBeTested(item: Resource) {
    return canRead(item) && isPl(item);
}

export function canBeLoaded(item: Resource) {
    return canWrite(item) && isPltp(item);
}

export function canBeReloaded(item: Resource) {
    return canWrite(item) && isPltp(item);
}

export function extension(resource: Resource) {
    const dotIndex = resource.name.lastIndexOf('.');
    return resource.name.substring(dotIndex + 1).toLowerCase();
}

export function canBeUsedAsFileName(name: string) {
    return name && DISALLOWED_CHAR.every(e => !name.includes(e));
}

export function checkName(name: string) {
    if (!name) {
        throw new Error('a resource name cannot be empty');
    }

    if (!canBeUsedAsFileName(name)) {
        throw new Error(name + ' cannot sould not contains any of ' + DISALLOWED_CHAR);
    }
}

export function requireNonNull(param: any, name: string) {
    if  (!param && typeof(param) !== 'boolean') {
        throw new TypeError(name + ' param is required !');
    }
}

export function assert(condition: any, message: string) {
    if  (!condition) {
        throw new Error(message);
    }
}

export function basename(path: string) {
    if (!path) {
        return path;
    }
    const array = path.split('/');
    return array[array.length - 1];
}

export function asURI(resource: Resource) {
    const monaco = (<any>window).monaco;
    return monaco.Uri.file(resource.path);
}

export function asURIGoTo(resource: Resource, line: number, column: number) {
    const monaco = (<any>window).monaco;
    return monaco.Uri.file(resource.path).with({ fragment: `${line},${column}`});
}

export function asURIFragment(resource: Resource, fragment: string) {
    const monaco = (<any>window).monaco;
    return monaco.Uri.file(resource.path).with({ fragment: fragment });
}

export function asDocument(resource: Resource, preview?: boolean): IEditorDocument {
    return {
        resource: resource,
        uri: asURI(resource),
        title: preview ? 'Preview \'' + resource.name + '\'' : resource.name,
        preview: preview,
        icon: resource.icon
    };
}

export function compareDocument(doc1: IEditorDocument, doc2: IEditorDocument) {
    return doc1.resource.path === doc2.resource.path;
}

export function compareGroup(grp1: IEditorGroup, grp2: IEditorGroup) {
    return grp1.id() === grp2.id();
}

export function resourceIsURI(resource: Resource, uri: monaco.Uri) {
    return '/' + resource.path === uri.path;
}
