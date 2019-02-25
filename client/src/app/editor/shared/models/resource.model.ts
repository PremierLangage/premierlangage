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
    renaming: boolean;
    creating: boolean;
    changed: boolean;
    dirty: boolean;

    nameBefore: string;
    parentRef: Resource;
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
