export const DISALLOWED_CHAR = ['/', ' ', '\t', '\n', ';', '#', '+', '&'];

/**
 * Throws an exception if obj is null or empty (expected for boolean and number)
 * @param obj - the object to evaluate
 * @param message - an optional error message
 * @return the object itself.
 */
export function requireNonNull<T>(obj: T, message?: string): T {
    if  (!obj && typeof(obj) !== 'boolean' && typeof(obj) !== 'number') {
        message = message ? message : 'should not be null or empty';
        throw new ReferenceError(message);
    }
    return obj;
}

/**
 * Throws an exception if condition if false.
 * @param condition - the condition
 * @param message - an optional error message
 * @return true if ther
 */
export function assert(condition: any, message?: string): boolean {
    if  (!condition) {
        throw new Error(message);
    }
    return true;
}

/**
 * Checks if name can be used a file name.
 * @param name the name to evaluate
 * @return true else throw an exception
 */
export function checkName(name: string): boolean {
    if (!name) {
        throw new ReferenceError('name should not be null or empty');
    }
    if (!DISALLOWED_CHAR.every(e => !name.includes(e))) {
        throw new Error(name + 'should not contains any of ' + DISALLOWED_CHAR);
    }
    return true;
}
