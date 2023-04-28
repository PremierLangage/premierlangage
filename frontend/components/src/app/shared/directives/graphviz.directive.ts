import { Directive, ElementRef, Input } from '@angular/core';
import { graphviz } from 'd3-graphviz';

@Directive({
    // tslint:disable-next-line: directive-selector
  selector: '[graphviz]'
})
export class GraphvizDirective {

    private _graph: string;

    get graph(): string {
        return this._graph;
    }

    @Input()
    set graph(value: string) {
        this._graph = value;
        this.render();
    }

    constructor(private elementRef: ElementRef) {
    }

    render() {
        if (this.elementRef && this._graph) {
            try {
                const viz = graphviz(this.elementRef.nativeElement);
                viz.renderDot(this._graph || '');
            } catch (error) {
                console.error(error);
            }
        }
    }

}
