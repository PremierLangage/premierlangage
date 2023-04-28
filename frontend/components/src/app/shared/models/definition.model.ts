import { InjectionToken, Type } from '@angular/core';

export interface ComponentDefinition {
    component: Type<any>;
    name: string;
    icon: string;
    link: string;
    selector: string;
    description: string;
    usages: {
        label: string,
        path: string
    }[];
    css?: {
            selector: string,
            description: string
    } [];
    properties: {
            name: string,
            default: any,
            type: string,
            description: string
    } [];
}

export const COMPONENT_DEFINITIONS = new InjectionToken<ComponentDefinition[]>('Definition Provider');
