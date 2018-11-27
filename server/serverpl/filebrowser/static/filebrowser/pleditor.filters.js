export function canRead(item) {
    return item.read;
}

export function canWrite(item) {
    return item.write;
}

export function isFolder(item) {
    return item.type == 'folder';
}

export function isFile(item) {
    return item.type == 'file';
}

export function isRoot(item) {
    return item.name === 'home' || item.name === 'lib';
}

export function isPl(item) {
    return item.name.endsWith('.pl');
}

export function isPltp(item) {
    return item.name.endsWith('.pltp');
}

export function isHome(item) {
    return item.name === 'home';
}

export function isNotRoot(item) {
    return !isRoot(item);
}

export function isInRepo(item) {
    return item.repo;
}