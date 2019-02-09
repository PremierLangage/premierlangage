export interface Resource {
    nameBeforeEdition: string;
    parentRef: Resource;
    state: {
        model: any;
        state: any;
        preview: string
    }
    name: string;
    path: string;
    parent: string;
    type: string;
    icon: string;
    content: string;
    image: string;
    editing: boolean;
    changed: boolean;
    dirty: boolean;
    write: boolean;
    read: boolean;
    expanded: boolean;
    children: Resource[];
    repo: {
        url: string,
        branch: string,
        host: string
    }
}

export function resourceInit(resource: Resource) {
    if (resource.state && resource.state.model)
        resource.state.model.dispose();

    resource.state = {
        model: undefined,
        state: undefined,
        preview: undefined,
    }
}

