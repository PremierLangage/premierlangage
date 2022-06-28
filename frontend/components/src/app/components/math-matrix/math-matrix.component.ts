import { Component, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Property, AbstractComponent } from '../../shared/models/abstract-component.model';
import { ResizeEvent } from 'angular-resizable-element';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';

@Component({
    // tslint:disable-next-line: component-selector
  selector: 'math-matrix-component',
  templateUrl: './math-matrix.component.html',
  styleUrls: ['./math-matrix.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MathMatrixComponent extends AbstractComponent {

    private _matrix: MatrixCell[][] = [];

    readonly properties: Property[] = [
        { name: 'disabled', default: false },
        { name: 'resizable', default: false },
        { name: 'cellWidth', default: '3em' },
        { name: 'cellHeight', default: '2em' },
        { name: 'matrix', default: [] },
    ];

    @Input()
    disabled: boolean;

    @Input()
    resizable: boolean;

    @Input()
    cellWidth = '3em';

    @Input()
    cellHeight = '2em';

    get matrix(): MatrixCell[][] {
        return this._matrix || [];
    }

    @Input()
    set matrix(value: MatrixCell[][]) {
        this._matrix = value || [];
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }
    rows() {
        return this.matrix.length;
    }

    cols() {
        return this.rows() > 0 ? this.matrix[0].length : 0;
    }

    onResizeEnd(event: ResizeEvent): void {
        if (event.edges.right > 0) {
            if (this.rows() === 0 || this.cols() === 0) {
                this.matrix = [[ { value: 0 } ]];
            } else {
                this.matrix.forEach(row => {
                    row.push( { value: 0 } );
                });
            }
        } else if (event.edges.right < 0) {
            for (let i = 0; i < this.rows(); i++) {
                this.matrix[i].pop();
            }
        } else if (event.edges.bottom > 0) {
            const row: MatrixCell[] = [];
            for (let i  = 0; i < this.cols(); i++) {
                row.push( { value: 0 } );
            }
            if (row.length === 0) {
                row.push( { value: 0 } );
            }
            this.matrix.push(row);
        } else if (event.edges.bottom < 0) {
            this.matrix.pop();
        }
    }

    onValidate(data: any) {
        for (const row of data.matrix) {
            for (const cell of row) {
                cell.value = Number.parseFloat(cell.value) || 0;
            }
        }
    }
}

export interface MatrixCell {
    value: number;
    css?: string;
    disabled?: boolean;
}

export class MathMatrixComponentDefinition implements ComponentDefinition {
    component = MathMatrixComponent;
    name = 'Math Matrix';
    icon = 'math-matrix.svg';
    selector = 'c-math-matrix';
    description = `Matrix matrix provides a way for users to enter a matrix.`;
    link = '/components/math-matrix';
    usages = [{ label: 'Example', path: 'playground/math-matrix.pl' }];
    properties = [
        { name: 'disabled', default: false, type: 'boolean', description: 'disabled state of the matrix' },
        { name: 'resizable', default: false, type: 'boolean', description: 'A value indicating whether the matrix is resizable' },
        { name: 'cellWidth', default: '3em', type: 'string', description: 'Cell width' },
        { name: 'cellHeight', default: '2em', type: 'string', description: 'Cell height' },
        { name: 'matrix', default: [], type: 'MatrixCell', description: 'The matrix' },
    ];
}
