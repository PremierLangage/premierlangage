import { IResource, ResourceTypes } from './resource.model';
import { IEditorGroup } from './editor-group.model';
import { extname } from 'src/app/shared/models/paths.model';
import { Asserts } from 'src/app/shared/models/assert.model';

/** extensions of files with preview option */
export const PREVIEW_EXTENSIONS = ['pl', 'md', 'svg'];

/**
 * Gets a value indicating whether the resource can be readed.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function canRead(item: IResource): boolean {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.read;
}

/**
 * Gets a value indicating whether the resource can be modified.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function canWrite(item: IResource): boolean {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.write;
}

/**
 * Gets a value indicating whether the resource is on readonly mode.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isReadOnly(item: IResource): boolean {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !canWrite(item);
}

/**
 * Gets a value indicating whether the resource is in a repository.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isRepo(item: IResource): boolean {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && !!item.repo;
}

/**
 * Gets a value indicating whether the resource is loaded with it's metadata.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isLoaded(item: IResource): boolean {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && !!item.meta;
}

/**
 * Gets a value indicating whether the resource is the home folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isHome(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.path === 'Yggdrasil';
}

/**
 * Gets a value indicating whether the resource is the lib folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isLib(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.path === 'lib';
}

/**
 * Gets a value indicating whether the resource is a root folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isRoot(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return isHome(item) || isLib(item);
}

/**
 * Gets a value indicating whether the resource is a folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isFolder(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.type === ResourceTypes.Folder;
}

/**
 * Gets a value indicating whether the resource is a file.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isFile(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.type === ResourceTypes.File;
}

/**
 * Gets a value indicating whether the resource is a PL resource.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isPL(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && extname(item.path) === 'pl';
}

/**
 * Gets a value indicating whether the resource is a svg resource.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isSVG(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && extname(item.path) === 'svg';
}

/**
 * Gets a value indicating whether the resource is a PLTP.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isPLTP(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && extname(item.path) === 'pltp';
}

/**
 * Gets a value indicating whether the resource is a markdown resource.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function isMarkdown(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && extname(item.path) === 'md';
}

/**
 * Gets a value indicating whether the resource can be previewed.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function canBePreviewed(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && PREVIEW_EXTENSIONS.includes(extname(item.path));
}

/**
 * Gets a value indicating whether the resource is a folder with a write permission.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function canAddChild(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return canWrite(item) && isFolder(item);
}

/**
 * Gets a value indicating whether the resource can be copied|dragged.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function canCopy(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return canRead(item) && !isRoot(item);
}

/**
 * Gets a value indicating whether the resource can be renamed.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function canBeRenamed(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return canWrite(item) && !isRoot(item);
}

/**
 * Gets a value indicating whether the resource can be deleted.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function canBeDeleted(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return canWrite(item) && !isRoot(item);
}

/**
 * Gets a value indicating whether the resource can be tested (PL only).
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function canBeTested(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return canRead(item) && isFile(item) && isPL(item);
}

/**
 * Gets a value indicating whether the resource can be loaded (PLTP only).
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function canBeLoaded(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return canWrite(item) && isFile(item) && isPLTP(item);
}

/**
 * Gets a value indicating whether the resource can be reloaded (PLTP only).
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
export function canBeReloaded(item: IResource) {
    Asserts.requireNonNull(item, 'param "item" is required');
    return canWrite(item) && isFile(item) && isPLTP(item);
}

/**
 * Checks whether the two groups are the same (id are equals)
 * @param grp1 the first group
 * @param grp2 the second group
 * @throws {ReferenceError} is grp1 or grp2 are null
 */
export function compareGroup(grp1: IEditorGroup, grp2: IEditorGroup) {
    Asserts.requireNonNull(grp1, '"param "grp1" is required');
    Asserts.requireNonNull(grp2, '"param "grp2" is required');
    return grp1.id() === grp2.id();
}

