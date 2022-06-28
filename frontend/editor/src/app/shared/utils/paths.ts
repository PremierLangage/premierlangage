export namespace Paths {

    /**
     * Returns the extension of the path (in lowercase), from the last '.' to end of string in the last portion of the path.
     * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
     * @param path the path to evaluate
     * @returns the extension in lowercase or an empty string.
     */
    export function extname(path: string) {
        const base = basename(path);
        if (!base) {
            return base;
        }
        if (base.startsWith('.')) {
            return '';
        }
        const dotIndex = base.lastIndexOf('.');
        if (dotIndex === -1) {
            return '';
        }
        return base.substring(dotIndex + 1).toLowerCase();
    }

    /**
     * Returns the directory name of a path. Similar to the Unix dirname command.
     * @param path the path to evaluate
     */
    export function dirname(path: string) {
        if (!path) {
            return path;
        }
        path = path.replace(/\\/g, '/');
        let head = path.slice(0, path.lastIndexOf('/') + 1);
        if (head && !head.match(/^\/*$/g)) {
        head = head.replace(/\/*$/g, '');
        }
        return head;
    }

    /**
     * Returns the last portion of a path. Similar to the Unix basename command.
     * Often used to extract the file name from a fully qualified path.
     * @param the path to evaluate.
     */
    export function basename(path: string) {
        if (!path) {
            return path;
        }
        path = path.replace(/\\/g, '/');
        return path.slice(path.lastIndexOf('/') + 1, path.length);
    }

}
