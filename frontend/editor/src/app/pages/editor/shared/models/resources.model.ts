import { Contracts } from 'src/app/shared/utils/contracts';
import { INode } from 'src/app/shared/models/tree.model';


export enum ResourceTypes {
    File = 'file',
    Folder = 'folder',
}

export interface IResource extends INode {
    /** the name of the resource */
    name: string;

    /** the full path of the resource */
    path: string;

    /** the full path of the resource parent */
    parent: string;

    /** the type of the resource */
    type: ResourceTypes;

    /** read permission */
    read: boolean;

    /** write permission */
    write: boolean;

    /** folder children */
    children?: IResource[];

    // dynamic added properties

    /** the local content of the resource */
    content?: string;

    /** the server content of the resource */
    savedContent?: string;

    /** opened in any editor */
    opened?: boolean;

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
    image?: boolean;
    excel?: boolean;
    previewData?: string;
    downloadUrl?: string;
}

export function fakeData(): IResource[] {
    return [
        {
            'parent':   '',
            'type':     ResourceTypes.Folder,
            'name':     'Yggdrasil',
            'path':     'Yggdrasil',
            'write':    true,
            'read':     true,
            'repo':     null,
            'children': [{
                'parent':   'Yggdrasil',
                'type':     ResourceTypes.Folder,
                'name':     'dir1',
                'path':     'Yggdrasil/dir1',
                'write':    true,
                'read':     true,
                'repo':     {
                    'url':    'repo1',
                    'branch': 'HEAD',
                    'host':   'fab fa-git'
                },
                'children': [
                    {
                        'parent': 'Yggdrasil/dir1',
                        'type':   ResourceTypes.File,
                        'name':   'file',
                        'path':   'Yggdrasil/dir1/file',
                        'write':  true,
                        'read':   true,
                        'repo':   null
                    }]
            }, {
                'parent':   'Yggdrasil',
                'type':     ResourceTypes.Folder,
                'name':     'dir2',
                'path':     'Yggdrasil/dir2',
                'write':    true,
                'read':     true,
                'repo':     {
                    'url':    'repo2',
                    'branch': 'HEAD',
                    'host':   'fab fa-git'
                },
                'children': []
            }, {
                'parent': 'Yggdrasil',
                'type':   ResourceTypes.File,
                'name':   'text.txt',
                'path':   'Yggdrasil/text.txt',
                'write':  true,
                'read':   true,
                'repo':   null
            }]
        }
    ];
}

export function createResource(parent: IResource, type: ResourceTypes): IResource {
    Contracts.assert(parent.type === ResourceTypes.Folder, 'resource.type must be folder');
    parent.children = parent.children || [];
    const resource: IResource = {
        name: '',
        parent: parent.path,
        path: parent.path + '/',
        type: type,
        read: parent.read,
        write: parent.write,
        repo: parent.repo,
    };

    if (type === ResourceTypes.Folder) {
        resource.children = [];
    }

    return resource;
}

export function cloneResource(resource: IResource): IResource {
    const copy: IResource = {
        ...resource,
    };

    if (resource.meta) {
        copy.meta = { ...resource.meta };
    }

    if (resource.repo) {
        copy.repo = { ...resource.repo };
    }

    if (resource.children) {
        copy.children = resource.children.map(r => cloneResource(r));
    }

    return copy;
}
