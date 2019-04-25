import { basename, dirname, extname } from './paths.model';

describe('Paths', () => {
    it('should get basename of a path', () => {
        expect(basename('Yggdrasil/Cbank/example.pl')).toBe('example.pl');
        expect(basename('Yggdrasil/Cbank/fake.example.pl')).toBe('fake.example.pl');
        expect(basename('Yggdrasil/Cbank/fake.example.pl')).toBe('fake.example.pl');
        expect(basename('Yggdrasil/Cbank/example')).toBe('example');
        expect(basename('fake.example')).toBe('fake.example');
        expect(basename('example.pl')).toBe('example.pl');
        expect(basename('example')).toBe('example');
        expect(basename('')).toBe('');
        expect(basename(undefined)).toBe(undefined);
    });

    it('should get dirname of a path', () => {
        expect(dirname('Yggdrasil/Cbank/example.pl')).toBe('Yggdrasil/Cbank');
        expect(dirname('Yggdrasil/Cbank/fake.example.pl')).toBe('Yggdrasil/Cbank');
        expect(dirname('Yggdrasil/Cbank/fake.example.pl')).toBe('Yggdrasil/Cbank');
        expect(dirname('Yggdrasil/Cbank/example')).toBe('Yggdrasil/Cbank');
        expect(dirname('fake.example')).toBe('');
        expect(dirname('fake.example/')).toBe('fake.example');
        expect(dirname('example.pl')).toBe('');
        expect(dirname('example')).toBe('');
        expect(dirname('example/')).toBe('example');
        expect(dirname('example////')).toBe('example');
        expect(dirname('/example////')).toBe('/example');
        expect(dirname('/example')).toBe('/');
        expect(dirname('')).toBe('');
        expect(dirname(undefined)).toBe(undefined);
    });


    it('should get extension of a path', () => {
        expect(extname('Yggdrasil/Cbank/example.pl')).toBe('pl');
        expect(extname('Yggdrasil/Cbank/fake.example.pl')).toBe('pl');
        expect(extname('Yggdrasil/Cbank/fake.example.PL')).toBe('pl');
        expect(extname('Yggdrasil/Cbank/example')).toBe('');
        expect(extname('fake.example')).toBe('example');
        expect(extname('example.pl')).toBe('pl');
        expect(extname('example')).toBe('');
        expect(extname('')).toBe('');
        expect(extname(undefined)).toBe(undefined);
    });
});
