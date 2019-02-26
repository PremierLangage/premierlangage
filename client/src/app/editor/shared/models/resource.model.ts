import { assert } from './filters.model';

export interface ResourceMeta {
    text: boolean;
    code: boolean;
    archive: boolean;
    application: boolean;
    image: boolean;
    excel: boolean;
    html: string;
    download_url: string;
}

export interface Resource {
    name: string;
    path: string;
    parent: string;
    type: string;
    icon: string;
    write: boolean;
    read: boolean;
    expanded: boolean;
    children: Resource[];

    content: string;
    lastContent: string;
    meta: ResourceMeta;
    /** opened in any editor */
    opened: boolean;
    renaming: boolean;
    creating: boolean;
    changed: boolean;
    /** changed on the server */
    dirty: boolean;

    repo: {
        url: string,
        branch: string,
        host: string
    };
}

export interface Repo {
    name: string;
    path: string;
    url: string;
    branch: string;
    count: number;
    changes: Change[];
}

export interface Change {
    name: string;
    path: string;
    type: string;
    isdir: boolean;
}

export const FILE_RESOURCE = 'file';
export const FOLDER_RESOURCE = 'folder';

export function newResource(parent: Resource, type: string): Resource {
    assert(type === FILE_RESOURCE || type === FOLDER_RESOURCE, `type param must be '${FILE_RESOURCE}' or '${FOLDER_RESOURCE}'`);
    assert(parent.type === 'folder', 'resource.type must be folder');
    assert(parent.children.every(e => !e.renaming), 'cannot edit multiple resources');
    parent.expanded = true;
    parent.children = parent.children || [];
    return {
        name: '',
        parent: parent.path,
        path: parent.path + '/',
        type: type,
        icon: 'fas fa-' + type,
        write: parent.write,
        read: parent.read,
        children: [],
        content: undefined,
        lastContent: undefined,
        creating: true,
        renaming: false,
        expanded: false,
        changed: false,
        opened: false,
        dirty: false,
        repo: {
            url: parent.repo.url,
            host: parent.repo.host,
            branch: parent.repo.branch,
        },
        meta: undefined,
    };
}