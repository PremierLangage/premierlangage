

export function canRead(item) {
    return item && item.read;
}

export function canWrite(item) {
    return item &&  item.write;
}

export function readonly(item) {
    return !canWrite(item);
}

export function isFolder(item) {
    return item &&  item.type == 'folder';
}

export function isFile(item) {
    return item &&  item.type == 'file';
}

export function isRoot(item) {
    return item &&  item.name === 'home' || item.name === 'home/' 
    || item.name === 'lib' || item.name === 'lib/';
}

export function isPl(item) {
    return item &&  item.name.endsWith('.pl');
}

export function isMarkdown(item) {
    return item &&  item.name.endsWith('.md');
}

export function isPltp(item) {
    return item &&  item.name.endsWith('.pltp');
}

export function canBePreviewed(item) {
    return item && isPl(item) || isPltp(item) || isMarkdown(item);
}

export function isHome(item) {
    return item && item.name === 'home';
}

export function isNotRoot(item) {
    return !isRoot(item);
}

export function isInRepo(item) {
    return item && item.repo;
}

export function canAddFile(item) {
    return canWrite(item) && isFolder(item);
}

export function canAddFolder(item) {
    return canWrite(item) && isFolder(item);
}

export function canBeRenamed(item) {
    return canWrite(item) && !isRoot(item);
}

export function canBeDeleted(item) {
    return canWrite(item) && isNotRoot(item);
}

export function canBeTested(item) {
    return canRead(item) && isPl(item);
}

export function canBeLoaded(item) {
    return canWrite(item) && isPltp(item);
}

export function canBeReloaded(item) {
    return canWrite(item) && isPltp(item);
}