import { IResource, ResourceTypes } from './resource.model';
import { IEditorGroup } from './editor-group.model';
import { extname } from 'src/app/shared/models/paths.model';

const PREVIEW_EXTENSIONS = ['pl', 'md', 'svg'];


export function canRead(item: IResource): boolean {
    return !!item && item.read;
}

export function canWrite(item: IResource): boolean {
    return !!item && item.write;
}

export function isReadonly(item: IResource): boolean {
    return !canWrite(item);
}

export function isRepo(item: IResource): boolean {
    return !!item && !!item.repo;
}

export function isFromServer(item: IResource): boolean {
    return !!item && item.type !== ResourceTypes.Local;
}

export function isLoaded(item: IResource): boolean {
    return !!item && !!item.meta;
}

export function isHome(item: IResource) {
    return !!item && item.path === 'Yggdrasil';
}

export function isLib(item: IResource) {
    return !!item && item.path === 'lib';
}

export function isRoot(item: IResource) {
    return isHome(item) || isLib(item);
}

export function isNotRoot(item: IResource) {
    return !isRoot(item);
}

export function isFolder(item: IResource) {
    return !!item && item.type === ResourceTypes.Folder;
}

export function isFile(item: IResource) {
    return !!item && item.type === ResourceTypes.File;
}

export function isPl(item: IResource) {
    return !!item && extname(item.path) === 'pl';
}

export function isSVG(item: IResource) {
    return !!item && extname(item.path) === 'svg';
}

export function isPltp(item: IResource) {
    return !!item && extname(item.path) === 'pltp';
}

export function isMarkdown(item: IResource) {
    return !!item && extname(item.path) === 'md';
}

export function canBePreviewed(item: IResource) {
    return !!item && PREVIEW_EXTENSIONS.includes(extname(item.path));
}



export function canAddFile(item: IResource) {
    return canWrite(item) && isFolder(item);
}

export function canCopy(item: IResource) {
    return canRead(item) && isNotRoot(item);
}

export function canAddFolder(item: IResource) {
    return canWrite(item) && isFolder(item);
}

export function canBeRenamed(item: IResource) {
    return canWrite(item) && !isRoot(item);
}

export function canBeDeleted(item: IResource) {
    return canWrite(item) && isNotRoot(item);
}

export function canBeTested(item: IResource) {
    return canRead(item) && isPl(item);
}

export function canBeLoaded(item: IResource) {
    return canWrite(item) && isPltp(item);
}

export function canBeReloaded(item: IResource) {
    return canWrite(item) && isPltp(item);
}

export function compareGroup(grp1: IEditorGroup, grp2: IEditorGroup) {
    return grp1.id() === grp2.id();
}

