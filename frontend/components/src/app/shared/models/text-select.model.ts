
export enum Typography {
    display4 = 'display4',
    display3 = 'display3',
    display2 = 'display2',
    display1 = 'display1',
    headline = 'headline',
    title = 'title',
    subheading2 = 'subheading2',
    subheading1 = 'subheading1',
    body1 = 'body1',
    body2 = 'body2',
    caption = 'caption',
}

export interface TextSelection {
    index: number | string;
    content: string;
    css?: string;
}

export interface TextSelectSplitOptions {
    mode: SplitMode;
    separator: string;
    attributes: (index: number) => string;
}

export declare type SplitMode = 'free' | 'word';
