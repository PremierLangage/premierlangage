import { Paths } from './paths';

describe('Paths', () => {
    it('should get basename of a path', () => {
        expect(Paths.basename('Yggdrasil/Cbank/example.pl')).toBe('example.pl');
        expect(Paths.basename('Yggdrasil/Cbank/fake.example.pl')).toBe('fake.example.pl');
        expect(Paths.basename('Yggdrasil/Cbank/fake.example.pl')).toBe('fake.example.pl');
        expect(Paths.basename('Yggdrasil/Cbank/example')).toBe('example');
        expect(Paths.basename('fake.example')).toBe('fake.example');
        expect(Paths.basename('example.pl')).toBe('example.pl');
        expect(Paths.basename('example')).toBe('example');
        expect(Paths.basename('')).toBe('');
        expect(Paths.basename(undefined)).toBe(undefined);
    });

    it('should get dirname of a path', () => {
        expect(Paths.dirname('Yggdrasil/Cbank/example.pl')).toBe('Yggdrasil/Cbank');
        expect(Paths.dirname('Yggdrasil/Cbank/fake.example.pl')).toBe('Yggdrasil/Cbank');
        expect(Paths.dirname('Yggdrasil/Cbank/fake.example.pl')).toBe('Yggdrasil/Cbank');
        expect(Paths.dirname('Yggdrasil/Cbank/example')).toBe('Yggdrasil/Cbank');
        expect(Paths.dirname('fake.example')).toBe('');
        expect(Paths.dirname('fake.example/')).toBe('fake.example');
        expect(Paths.dirname('example.pl')).toBe('');
        expect(Paths.dirname('example')).toBe('');
        expect(Paths.dirname('example/')).toBe('example');
        expect(Paths.dirname('example////')).toBe('example');
        expect(Paths.dirname('/example////')).toBe('/example');
        expect(Paths.dirname('/example')).toBe('/');
        expect(Paths.dirname('')).toBe('');
        expect(Paths.dirname(undefined)).toBe(undefined);
    });


    it('should get extension of a path', () => {
        expect(Paths.extname('Yggdrasil/Cbank/example.pl')).toBe('pl');
        expect(Paths.extname('Yggdrasil/Cbank/fake.example.pl')).toBe('pl');
        expect(Paths.extname('Yggdrasil/Cbank/fake.example.PL')).toBe('pl');
        expect(Paths.extname('Yggdrasil/Cbank/example')).toBe('');
        expect(Paths.extname('fake.example')).toBe('example');
        expect(Paths.extname('example.pl')).toBe('pl');
        expect(Paths.extname('example')).toBe('');
        expect(Paths.extname('')).toBe('');
        expect(Paths.extname(undefined)).toBe(undefined);
    });
});
