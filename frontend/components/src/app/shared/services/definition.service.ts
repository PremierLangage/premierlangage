import { Injectable, Inject } from '@angular/core';
import { COMPONENT_DEFINITIONS, ComponentDefinition } from '../models/definition.model';

@Injectable({ providedIn: 'root' })
export class DefinitionService {

    constructor(
        @Inject(COMPONENT_DEFINITIONS)
        private readonly components: ComponentDefinition[],
    ) {
        this.components = this.components.sort((a, b) => {
            return a.name.localeCompare(b.name);
        }).map(this.injectRequiredProperties.bind(this));
    }

    forEach(consume: (item: ComponentDefinition) => void) {
        this.components.forEach(consume);
    }

    findOne(predicate: (e: ComponentDefinition) => boolean): ComponentDefinition {
        return this.components.find(predicate);
    }

    findAll(): ComponentDefinition[] {
        return this.components.slice();
    }

    private injectRequiredProperties(def: ComponentDefinition) {
        // tslint:disable-next-line: max-line-length
        def.properties.push( { name: 'debug', default: false, type: 'boolean', description: 'Prints the current properties of the component' });
        def.properties.push( { name: 'selector', default: '', type: 'string', description: 'Selector of the component.' });
        def.properties.push( { name: 'cid', default: '', type: 'string', description: 'Unique identifier of the component' });
        def.properties.push({
            name: 'css', default: '', type: 'string',
            description: 'A space separated list of css classes to add to the component container'
        });
        def.properties = def.properties.sort((a: any, b: any) => {
            return a.name.localeCompare(b.name);
        });
        def.properties = def.properties.sort((a, b ) => {
            return a.name.localeCompare(b.name);
        });
        return def;
    }

}
