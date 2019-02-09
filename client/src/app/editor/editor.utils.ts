import { Resource } from '../models/resource';
import { LANGUAGES } from './editor.config';

export const DISALLOWED_CHAR = ['/', ' ', '\t', '\n', ';', '#', '+', '&']

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
    return item &&  item.type == 'folder';
}

export function isFile(item: Resource) {
    return item &&  item.type == 'file';
}

export function isRoot(item: Resource) {
    return item &&  item.name === 'home' || item.name === 'home/' 
    || item.name === 'lib' || item.name === 'lib/';
}

export function isPl(item: Resource) {
    return item &&  item.name.endsWith('.pl');
}

export function isMarkdown(item: Resource) {
    return item &&  item.name.endsWith('.md');
}

export function isPltp(item: Resource) {
    return item &&  item.name.endsWith('.pltp');
}

export function canBePreviewed(item: Resource) {
    return item && isPl(item);
}

export function isHome(item: Resource) {
    return item && item.name === 'home';
}

export function isNotRoot(item: Resource) {
    return !isRoot(item);
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
    return canWrite(item) && !isRoot(item);
}

export function canBeDeleted(item: Resource) {
    return canWrite(item) && isNotRoot(item);
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

export function extensionOf(resource: Resource) {
    const dotIndex = resource.name.lastIndexOf('.');
    return resource.name.substring(dotIndex + 1);
}

export function language(resource: Resource) {
    const extension = extensionOf(resource);
    if (extension in LANGUAGES)
        return LANGUAGES[extension];
    return '';
}

export function canBeUsedAsFileName(name: string) {
    return name && DISALLOWED_CHAR.every(e => !name.includes(e));
}

export function checkName(name: string) {
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
    if (!path)
        return path;
    const array = path.split('/');
    return array[array.length - 1];
}