import { Resource, ResourceTypes } from './resource.model';
import { IEditorDocument } from '../services/core/opener.service';
import { IEditorGroup } from './editor-group.model';
import { extname } from 'src/app/shared/models/paths.model';

const PREVIEW_EXTENSIONS = ['pl', 'md', 'svg'];


export function canRead(item: Resource) {
    return item && item.read;
}

export function canWrite(item: Resource) {
    return item &&  item.write;
}

export function isReadonly(item: Resource) {
    return !canWrite(item);
}

export function isRepo(item: Resource) {
    return item && item.repo;
}

export function isFromServer(resource: Resource) {
    return resource.type !== ResourceTypes.LOCAL;
}

export function isHome(item: Resource) {
    return item && item.path === 'Yggdrasil';
}

export function isLib(item: Resource) {
    return item && item.path === 'lib';
}

export function isRoot(item: Resource) {
    return isHome(item) || isLib(item);
}

export function isNotRoot(item: Resource) {
    return !isRoot(item);
}

export function isFolder(item: Resource) {
    return item &&  item.type === ResourceTypes.FOLDER;
}

export function isFile(item: Resource) {
    return item &&  item.type === ResourceTypes.FILE;
}

export function isPl(item: Resource) {
    return extname(item.path) === 'pl';
}

export function isSVG(item: Resource) {
    return extname(item.path) === 'svg';
}

export function isPltp(item: Resource) {
    return extname(item.path) === 'pltp';
}

export function isMarkdown(item: Resource) {
    return extname(item.path) === 'md';
}

export function canBePreviewed(item: Resource) {
    return PREVIEW_EXTENSIONS.includes(extname(item.path));
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

export function compareDocument(doc1: IEditorDocument, doc2: IEditorDocument) {
    return doc1.resource.path === doc2.resource.path;
}

export function compareGroup(grp1: IEditorGroup, grp2: IEditorGroup) {
    return grp1.id() === grp2.id();
}

