import { checkName, DISALLOWED_CHAR, requireNonNull } from './assert.model';

describe('Assert', () => {
    it('should checkName return true on valid name', () => {
        expect(checkName('example.pl')).toBe(true);
        expect(checkName('fake.example.pl')).toBe(true);
    });

    it('should checkName throw exception on invalid name', () => {
        for (const e of DISALLOWED_CHAR) {
            expect(() => checkName('example.pl' + e)).toThrowError(Error);
        }
        expect(() => checkName('')).toThrowError(TypeError);
        expect(() => checkName(undefined)).toThrowError(TypeError);
    });

    it('should requireNonNull throw exception', () => {
        expect(() => requireNonNull('', 'message')).toThrowError('message');
        expect(() => requireNonNull(undefined)).toThrowError(TypeError);
        expect(requireNonNull(false)).toBeFalsy();
        expect(requireNonNull(0)).toBe(0);
    });
});
