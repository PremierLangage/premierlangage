import { Asserts } from './assert.model';

describe('Assert', () => {
    it('should Asserts.checkName return true on valid name', () => {
        expect(Asserts.checkName('example.pl')).toBe(true);
        expect(Asserts.checkName('fake.example.pl')).toBe(true);
    });

    it('should Asserts.checkName throw exception on invalid name', () => {
        for (const e of Asserts.DISALLOWED_CHAR) {
            expect(() => Asserts.checkName('example.pl' + e)).toThrowError(Error);
        }
        expect(() => Asserts.checkName('')).toThrowError(ReferenceError);
        expect(() => Asserts.checkName(undefined)).toThrowError(ReferenceError);
    });

    it('should Asserts.requireNonNull throw exception', () => {
        expect(() => Asserts.requireNonNull('', 'message')).toThrowError('message');
        expect(() => Asserts.requireNonNull(undefined)).toThrowError(ReferenceError);
        expect(Asserts.requireNonNull(false)).toBeFalsy();
        expect(Asserts.requireNonNull(0)).toBe(0);
    });
});
