import { Contracts } from './contracts';

describe('Assert', () => {
    it('should Asserts.checkName return true on valid name', () => {
        expect(Contracts.checkName('example.pl')).toBeUndefined();
        expect(Contracts.checkName('fake.example.pl')).toBeUndefined();
    });

    it('should Asserts.checkName throw exception on invalid name', () => {
        for (const e of Contracts.DISALLOWED_CHAR) {
            expect(() => Contracts.checkName('example.pl' + e)).toThrowError(Error);
        }
        expect(() => Contracts.checkName('')).toThrowError(ReferenceError);
        expect(() => Contracts.checkName(undefined)).toThrowError(ReferenceError);
    });

    it('should Asserts.requireNonNull throw exception', () => {
        expect(Contracts.requireNonNull('')).toBe('');
        expect(Contracts.requireNonNull(0)).toBe(0);
        expect(Contracts.requireNonNull(false)).toBe(false);
        expect(() => Contracts.requireNonNull(undefined)).toThrowError(ReferenceError);
    });
});
