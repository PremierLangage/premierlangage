
export interface IBlame {
    sha1: string;
    email: string;
    day: string;
    hour: string;
    gmt: string;
    line: number;
    commit: string;
    text: string;
}


export interface IRepo {
    name: string;
    path: string;
    url: string;
    branch: string;
    count: number;
    changes: IChange[];
}

export interface IChange {
    name: string;
    path: string;
    type: string;
    isdir: boolean;
}
