import { IResource, ResourceTypes } from './resource.model';
import * as filters from './filters.model';

const FILE: IResource = {
    type: ResourceTypes.File, name: 'file.txt', path: 'folder/file.txt', parent: 'folder',
    read: true, write: true, children: []
};

const FOLDER: IResource = {
    type: ResourceTypes.Folder, name: 'folder', path: 'folder', parent: '',
    read: true, write: true, children: []
};

const NOT_READ: IResource = {
    ...FILE, read: false
};
const NOT_WRITE: IResource = {
    ...FILE, write: false
};

describe('Filters', () => {
    it('should canRead filters works', () => {
        expect(filters.canRead(FILE)).toBeTruthy();
        expect(filters.canRead(NOT_READ)).toBeFalsy();
        expect(() => filters.canRead(undefined)).toThrowError(ReferenceError);
    });

    it('should canWrite filters works', () => {
        expect(filters.canWrite(FILE)).toBeTruthy();
        expect(filters.canWrite(NOT_WRITE)).toBeFalsy();
        expect(() => filters.canWrite(undefined)).toThrowError(ReferenceError);
    });

    it('should isReadonly filters works', () => {
        expect(filters.isReadOnly(NOT_WRITE)).toBeTruthy();
        expect(filters.isReadOnly(NOT_READ)).toBeFalsy();
        expect(() => filters.isReadOnly(undefined)).toThrowError(ReferenceError);
    });

    it('should isRepo filters works', () => {
        expect(filters.isRepo({ ...FILE, repo: { url: '', branch: '', host: ''} })).toBeTruthy();
        expect(filters.isRepo(FILE)).toBeFalsy();
        expect(() => filters.isRepo(undefined)).toThrowError(ReferenceError);
    });

    it('should isLoaded filters works', () => {
        expect(filters.isLoaded({...FILE, meta: { } })).toBeTruthy();
        expect(filters.isLoaded(FILE)).toBeFalsy();
        expect(() => filters.isLoaded(undefined)).toThrowError(ReferenceError);
    });

    it('should isHome filters works', () => {
        expect(filters.isHome({...FILE, path: 'Yggdrasil'})).toBeTruthy();
        expect(filters.isHome(FILE)).toBeFalsy();
        expect(() => filters.isHome(undefined)).toThrowError(ReferenceError);
    });

    it('should isLib filters works', () => {
        expect(filters.isLib({...FILE, path: 'lib' })).toBeTruthy();
        expect(filters.isLib(FILE)).toBeFalsy();
        expect(() => filters.isLib(undefined)).toThrowError(ReferenceError);
    });

    it('should isRoot filters works', () => {
        expect(filters.isRepo({...FILE, repo: { url: '', branch: '', host: ''}})).toBeTruthy();
        expect(filters.isRepo(FILE)).toBeFalsy();
        expect(() => filters.isRepo(undefined)).toThrowError(ReferenceError);
    });

    it('should isFolder filters works', () => {
        expect(filters.isFolder({...FILE, type: ResourceTypes.Folder })).toBeTruthy();
        expect(filters.isFolder(FILE)).toBeFalsy();
        expect(() => filters.isFolder(undefined)).toThrowError(ReferenceError);
    });

    it('should isFile filters works', () => {
        expect(filters.isFile({...FILE, type: ResourceTypes.Folder })).toBeFalsy();
        expect(filters.isFile(FILE)).toBeTruthy();
        expect(() => filters.isFolder(undefined)).toThrowError(ReferenceError);
    });

    it('should isPL filters works', () => {
        expect(filters.isPL({...FILE, path: 'test.pl' })).toBeTruthy();
        expect(filters.isPL({...FILE, path: 'test.PL' })).toBeTruthy();
        expect(filters.isPL({...FILE, path: 'test.pL' })).toBeTruthy();
        expect(filters.isPL({...FILE, path: 'test.Pl' })).toBeTruthy();
        expect(filters.isPL({...FILE, path: 'test.pltp' })).toBeFalsy();
        expect(filters.isPL({...FILE, path: 'test.p' })).toBeFalsy();
        expect(filters.isMarkdown({...FILE, path: 'test' })).toBeFalsy();
        expect(filters.isMarkdown({...FOLDER, path: 'test.pl' })).toBeFalsy();
        expect(() => filters.isPL(undefined)).toThrowError(ReferenceError);
    });

    it('should isPLTP filters works', () => {
        expect(filters.isPLTP({...FILE, path: 'test.pltp' })).toBeTruthy();
        expect(filters.isPLTP({...FILE, path: 'test.PLTP' })).toBeTruthy();
        expect(filters.isPLTP({...FILE, path: 'test.pl' })).toBeFalsy();
        expect(filters.isPLTP({...FILE, path: 'test.tp' })).toBeFalsy();
        expect(filters.isMarkdown({...FILE, path: 'test' })).toBeFalsy();
        expect(filters.isMarkdown({...FOLDER, path: 'test.pltp' })).toBeFalsy();
        expect(() => filters.isPL(undefined)).toThrowError(ReferenceError);
    });

    it('should isSVG filters works', () => {
        expect(filters.isSVG({...FILE, path: 'test.svg' })).toBeTruthy();
        expect(filters.isSVG({...FILE, path: 'test.SVG' })).toBeTruthy();
        expect(filters.isSVG({...FILE, path: 'test.s' })).toBeFalsy();
        expect(filters.isSVG({...FILE, path: 'test.sv' })).toBeFalsy();
        expect(filters.isMarkdown({...FILE, path: 'test' })).toBeFalsy();
        expect(filters.isMarkdown({...FOLDER, path: 'test.svg' })).toBeFalsy();
        expect(() => filters.isPL(undefined)).toThrowError(ReferenceError);
    });

    it('should isMarkdown filters works', () => {
        expect(filters.isMarkdown({...FILE, path: 'test.md' })).toBeTruthy();
        expect(filters.isMarkdown({...FILE, path: 'test.MD' })).toBeTruthy();
        expect(filters.isMarkdown({...FILE, path: 'test.m' })).toBeFalsy();
        expect(filters.isMarkdown({...FILE, path: 'test' })).toBeFalsy();
        expect(filters.isMarkdown({...FILE, path: 'test.mdd' })).toBeFalsy();
        expect(filters.isMarkdown({...FOLDER, path: 'test.md' })).toBeFalsy();
        expect(() => filters.isPL(undefined)).toThrowError(ReferenceError);
    });

    it('should canBePreviewed filters works', () => {
        for (const item of filters.PREVIEW_EXTENSIONS) {
            expect(filters.canBePreviewed({...FILE, path: 'test.' + item })).toBeTruthy();
            expect(filters.canBePreviewed({...FILE, path: 'test.' + item.toUpperCase() })).toBeTruthy();
        }
        expect(filters.canBePreviewed({...FILE, path: 'test.' })).toBeFalsy();
        expect(() => filters.isPL(undefined)).toThrowError(ReferenceError);
    });

    it('should canAddChild filters works', () => {
        expect(filters.canAddChild({...FOLDER, write: true })).toBeTruthy();
        expect(filters.canAddChild({...FOLDER, write: true, read: false })).toBeTruthy();
        expect(filters.canAddChild({...FOLDER, write: false })).toBeFalsy();
        expect(filters.canAddChild(FILE)).toBeFalsy();
        expect(() => filters.isPL(undefined)).toThrowError(ReferenceError);
    });

    it('should canCopy filters works', () => {
        expect(filters.canCopy({...FOLDER, read: true })).toBeTruthy();
        expect(filters.canCopy({...FILE, read: true })).toBeTruthy();
        expect(filters.canCopy({...FOLDER, read: false })).toBeFalsy();
        expect(filters.canCopy({...FILE, read: false })).toBeFalsy();
        expect(filters.canCopy({...FOLDER, read: true, path: 'lib' })).toBeFalsy();
        expect(filters.canCopy({...FOLDER, read: true, path: 'Yggdrasil' })).toBeFalsy();
        expect(() => filters.isPL(undefined)).toThrowError(ReferenceError);
    });

    it('should canBeRenamed filters works', () => {
        expect(filters.canBeRenamed({...FOLDER, write: true })).toBeTruthy();
        expect(filters.canBeRenamed({...FOLDER, write: true, read: false })).toBeTruthy();
        expect(filters.canBeRenamed({...FILE, write: true })).toBeTruthy();
        expect(filters.canBeRenamed({...FILE, write: true, read: false })).toBeTruthy();
        expect(filters.canBeRenamed({...FOLDER, write: false })).toBeFalsy();
        expect(filters.canBeRenamed({...FILE, write: false })).toBeFalsy();
        expect(filters.canBeRenamed({...FOLDER, write: true, path: 'lib' })).toBeFalsy();
        expect(filters.canBeRenamed({...FOLDER, write: true, path: 'Yggdrasil' })).toBeFalsy();
        expect(() => filters.isPL(undefined)).toThrowError(ReferenceError);
    });

    it('should canBeDeleted filters works', () => {
        expect(filters.canBeDeleted({...FOLDER, write: true })).toBeTruthy();
        expect(filters.canBeDeleted({...FOLDER, write: true, read: false })).toBeTruthy();
        expect(filters.canBeDeleted({...FILE, write: true })).toBeTruthy();
        expect(filters.canBeDeleted({...FILE, write: true, read: false })).toBeTruthy();
        expect(filters.canBeDeleted({...FOLDER, write: false })).toBeFalsy();
        expect(filters.canBeDeleted({...FILE, write: false })).toBeFalsy();
        expect(filters.canBeDeleted({...FOLDER, write: true, path: 'lib' })).toBeFalsy();
        expect(filters.canBeDeleted({...FOLDER, write: true, path: 'Yggdrasil' })).toBeFalsy();
        expect(() => filters.isPL(undefined)).toThrowError(ReferenceError);
    });

    it('should canBeTested filters works', () => {
        expect(filters.canBeTested({...FILE, path: 'test.pl', read: true })).toBeTruthy();
        expect(filters.canBeTested({...FILE, path: 'test.pl', read: false })).toBeFalsy();
        expect(filters.canBeTested({...FILE, path: 'test.pl', write: true, read: false })).toBeFalsy();
        expect(filters.canBeTested({...FILE, path: 'test.pltp', read: true })).toBeFalsy();
        expect(filters.canBeTested({...FOLDER, path: 'test.pl', read: true })).toBeFalsy();
        expect(() => filters.canBeTested(undefined)).toThrowError(ReferenceError);
    });

    it('should canBeLoaded filters works', () => {
        expect(filters.canBeLoaded({...FILE, path: 'test.pltp', write: true })).toBeTruthy();
        expect(filters.canBeLoaded({...FILE, path: 'test.pltp', write: false })).toBeFalsy();
        expect(filters.canBeLoaded({...FILE, path: 'test.pltp', write: false, read: true })).toBeFalsy();
        expect(filters.canBeLoaded({...FILE, path: 'test.pl', write: false })).toBeFalsy();
        expect(filters.canBeLoaded({...FOLDER, path: 'test.pl', write: true })).toBeFalsy();
        expect(() => filters.canBeLoaded(undefined)).toThrowError(ReferenceError);
    });

    it('should canBeReloaded filters works', () => {
        expect(filters.canBeReloaded({...FILE, path: 'test.pltp', write: true })).toBeTruthy();
        expect(filters.canBeReloaded({...FILE, path: 'test.pltp', write: false })).toBeFalsy();
        expect(filters.canBeReloaded({...FILE, path: 'test.pltp', write: false, read: true })).toBeFalsy();
        expect(filters.canBeReloaded({...FILE, path: 'test.pl', write: false })).toBeFalsy();
        expect(filters.canBeReloaded({...FOLDER, path: 'test.pl', write: true })).toBeFalsy();
        expect(() => filters.canBeReloaded(undefined)).toThrowError(ReferenceError);
    });
});
