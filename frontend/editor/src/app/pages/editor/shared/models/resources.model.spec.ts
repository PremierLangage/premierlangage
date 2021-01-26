import { IResource, fakeData, cloneResource, createResource, ResourceTypes } from './resources.model';

describe('Resources', () => {
    let FAKE_DATA: IResource[];
    beforeEach(() => {
        FAKE_DATA = fakeData();
    });

    it('should createResource throw exceptions', () => {
        expect(() => createResource(FAKE_DATA[0][3], ResourceTypes.File)).toThrowError();
    });

    it('should cloneResource preserve properties', () => {
        const original = FAKE_DATA[0];
        const copy = cloneResource(original);
        Object.keys(original).forEach(k => {
            expect(copy[k]).toEqual(original[k]);
        });
    });


    it('should cloneResource be a deep copy', () => {
        const original = FAKE_DATA[0].children[0];
        original.meta = {
            downloadUrl: '.....'
        };

        const copy = cloneResource(original);

        copy.name = 'new-name';
        expect(copy.name).not.toEqual(original.name);

        copy.path = 'new-path';
        expect(copy.path).not.toEqual(original.path);

        copy.repo.url = 'new-url';
        expect(copy.repo.url).not.toEqual(original.repo.url);

        copy.meta.downloadUrl = 'new-download-url';
        expect(copy.meta.downloadUrl).not.toEqual(original.meta.downloadUrl);

        copy.children[0].name = 'new-name';
        expect(copy.children[0].name).not.toEqual(original.children[0].name);
    });

});
