export namespace Asserts {
    export const DISALLOWED_CHAR = ['/', ' ', '\t', '\n', ';', '#', '+', '&'];

    /**
     * Throws an exception if obj is null or empty (expected for boolean and number)
     * @param obj - the object to evaluate
     * @param message - an optional error message
     * @throws {ReferenceError} if obj is null or undefined
     * @return the object itself.
     */
    export function requireNonNull<T>(obj: T, message?: string): T {
        if (obj == null) {
            message = message || 'require non null';
            throw new ReferenceError(message);
        }
        return obj;
    }

    export function requireNonNullArray<T>(array: T[], message?: string): T[] {
        this.requireNonNull(array, message);
        array.forEach(item => this.requireNonNull(item), message);
        return array;
    }

    export function requireNonNullString(input: string, message?: string): string {
        if (input == null || input.trim().length === 0) {
            message = message || `'require non null or empty`;
            throw new ReferenceError(message);
        }
        return input;
    }

    /**
     * Throws an exception if condition if false.
     * @param condition - the condition
     * @param message - an optional error message
     * @throws {Error} if condition is false
     */
    export function assert(condition: boolean, message?: string) {
        if  (!condition) {
            throw new Error(message);
        }
    }

    /**
     * Checks if name can be used a file name.
     * @param name the name to evaluate
     * @return true else throw an exception
     */
    export function checkName(name: string) {
        if (!name) {
            throw new ReferenceError('name should not be null or empty');
        }
        if (!DISALLOWED_CHAR.every(e => !name.includes(e))) {
            throw new Error(name + 'should not contains any of ' + DISALLOWED_CHAR);
        }
    }

}
