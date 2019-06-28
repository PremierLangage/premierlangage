import { Asserts } from 'src/app/shared/models/assert.model';

export enum ResourceTypes {
    File = 'file',
    Folder = 'folder',
}

export interface IResource {
    /** the name of the resource */
    name: string;

    /** the full path of the resource */
    path: string;

    /** the full path of the resource parent */
    parent: string;

    /** the type of the resource */
    type: ResourceTypes;

    /** write permission */
    write: boolean;

    /** read permission */
    read: boolean;

    /** folder children */
    children: IResource[];

    // optional properties

    /** the local content of the resource */
    content?: string;

    /** the server content of the resource */
    savedContent?: string;

    /** is the resource expanded or not? */
    expanded?: boolean;

    /** opened in any editor */
    opened?: boolean;

    /** being renamed */
    renaming?: boolean;

    /** being created */
    creating?: boolean;

    /** local content changed  */
    changed?: boolean;

    /** server content changed */
    dirty?: boolean;

    /** metadata informations about the resource */
    meta?: IResourceMeta;

    /** informations about the git repository of the resource */
    repo?: {
        /** url of the git repository */
        url: string,

        /** branch of the git repository */
        branch: string,

        /** host of the git repository */
        host: string
    };
}

export interface IResourceMeta {
    text?: boolean;
    code?: boolean;
    archive?: boolean;
    application?: boolean;
    image?: boolean;
    excel?: boolean;
    previewData?: string;
    downloadUrl?: string;
}

export function createResource(parent: IResource, type: ResourceTypes): IResource {
    Asserts.assert(parent.type === 'folder', 'resource.type must be folder');
    Asserts.assert(parent.children.every(e => !e.renaming), 'cannot edit multiple resources');
    parent.expanded = true;
    parent.children = parent.children || [];
    return {
        name: '',
        parent: parent.path,
        path: parent.path + '/',
        type: type,
        write: parent.write,
        read: parent.read,
        children: [],
        content: undefined,
        savedContent: undefined,
        creating: true,
        renaming: false,
        expanded: false,
        changed: false,
        opened: false,
        dirty: false,
        repo: parent.repo,
        meta: undefined,
    };
}
