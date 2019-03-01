import { assert } from 'src/app/shared/models/assert.model';

export enum ResourceTypes {
    FILE = 'file',
    FOLDER = 'folder',
    LOCAL = 'local'
}

export interface Resource {
    name: string;
    path: string;
    parent: string;
    type: ResourceTypes;
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

export interface ResourceMeta {
    text?: boolean;
    code?: boolean;
    archive?: boolean;
    application?: boolean;
    image?: boolean;
    excel?: boolean;
    previewData?: string;
    downloadUrl?: string;
}

export function newResource(parent: Resource, type: ResourceTypes): Resource {
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
