import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { TextSelection, Typography, TextSelectSplitOptions, SplitMode } from 'src/app/shared/models/text-select.model';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'text-select-component',
    templateUrl: './text-select.component.html',
    styleUrls: ['./text-select.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TextSelectComponent extends AbstractComponent {
    private _text: string;
    private _typo: Typography;
    private _selections: TextSelection[];
    private wrappers: {node: HTMLElement, selection: TextSelection}[] = [];

    readonly properties: Property[] = [
        { name: 'text', default: '' },
        { name: 'mode', default: 'word' },
        { name: 'typo', default: Typography.body1 },
        { name: 'separator', default: ' ' },
        { name: 'selections', default: [] }
    ];

    readonly options: TextSelectSplitOptions = {
        mode: 'word',
        separator: ' ',
        attributes: (index: number) => {
            const item = this.selections.find(e => e.index === index);
            return item ? `class="${item.css || 'highlight-state'}"` : '';
        }
    };


    @ViewChild('container', { static: false })
    container: ElementRef;

    get separator(): string {
        return this.options.separator;
    }

    @Input()
    set separator(value: string) {
        this.options.separator = value;
    }

    get mode(): SplitMode {
        return this.options.mode;
    }

    @Input()
    set mode(value: SplitMode) {
        this.options.mode = value;
    }

    get text(): string {
        return this._text || (this._text = '');
    }

    @Input()
    set text(value: string) {
        this._selections = [];
        this._text = value || '';
    }

    get typo() {
        return this._typo || (this._typo = Typography.body1);
    }

    @Input()
    set typo(value: Typography) {
        this._typo = value || Typography.body1;
    }

    get selections(): TextSelection[] {
        return this._selections || (this._selections = []);
    }

    @Input()
    set selections(value: TextSelection[]) {
        this._selections = value || [];
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    onRender() {
        setTimeout(() => {
            if (this.options.mode === 'free') {
                this.selections.forEach(s => {
                    const tokens = s.index.toString().split(':');
                    const i = Number.parseInt(tokens[0], 10);
                    const j = Number.parseInt(tokens[1], 10);
                    this.selectRange(i, j, s.css || 'highlight-state');
                });
            }
        }, 100);
    }

    didWordSelection(e: MouseEvent): void {
        const node = e.target as HTMLElement;
        const index = Number.parseInt(node.getAttribute('data-index'), 10);
        if (!Number.isNaN(index)) {
            let i = 0;
            for (const item of this._selections) {
                if (item.index === index) {
                    this._selections.splice(i, 1);
                    node.className = '';
                    return;
                }
                i++;
            }
            node.className = 'highlight-state';
            this._selections.push({
                index,
                content: node.innerHTML.trim()
            });
        }
    }

    didFreeSelection(e: MouseEvent) {
        const fn = window.getSelection || document.getSelection;
        const selection = fn();

        const startNode = selection.anchorNode.parentElement;
        const endNode = selection.focusNode.parentElement;

        const si = Number.parseInt(startNode.getAttribute('data-index'), 10);
        const ei = Number.parseInt(endNode.getAttribute('data-index'), 10);

        const i = Math.min(si, ei);
        const j = Math.max(si, ei);

        this.selectRange(i, j, 'highlight-state');
    }

    private selectRange(i: number, j: number, className: string): void {
        function unwrap(wrapper: HTMLElement) {
            // place childNodes in document fragment
            const docFrag = document.createDocumentFragment();
            while (wrapper.firstChild) {
                const child = wrapper.removeChild(wrapper.firstChild);
                docFrag.appendChild(child);
            }
            // replace wrapper with document fragment
            wrapper.parentNode.replaceChild(docFrag, wrapper);
        }

        const p = this.container.nativeElement as HTMLElement;
        const a = p.querySelector(`[data-index="${i}"]`);
        const b = p.querySelector(`[data-index="${j}"]`);

        const c = this.wrappers.find(e => {
            return e.node.contains(a) || e.node.contains(b);
        });

        if (c) {
            unwrap(c.node);
            this.selections = this.selections.filter(e => e.index !== c.selection.index);
            this.wrappers = this.wrappers.filter(e => e !== c);
        } else {
            const wrapper = document.createElement('span');
            wrapper.className = className;
            p.insertBefore(wrapper, a);

            let node: Element = a;
            while (node && !node.isSameNode(b)) {
                const next = node.nextElementSibling;
                p.removeChild(node);
                wrapper.appendChild(node);
                node = next;
            }

            p.removeChild(b);
            wrapper.appendChild(b);

            const index = i + ':' + j;
            const selection = {
                index,
                content: wrapper.textContent.trim()
            };

            if (!this.selections.some(e => e.index === index)) {
                this.selections.push(selection);
            }

            this.wrappers.push({
                node: wrapper,
                selection
            });
        }
        this.detectChanges();
    }

}

export class TextSelectComponentDefinition implements ComponentDefinition {
    component = TextSelectComponent;
    name = 'Text Select';
    icon = 'text-select.svg';
    selector = 'c-text | c-text-select';
    description = 'This component provides a way to select a part of a text.';
    link = '/components/text-select';
    usages = [
        { label: 'Word Mode', path: 'playground/text-select.pl' },
        { label: 'Free Mode', path: 'playground/text-select-free.pl' }
    ];
    properties = [
        { name: 'text', default: '""', type: 'string', description: 'Text to display'  },
        { name: 'mode', default: 'word', type: '"word" | "free"', description: 'Text selection mode'  },
        { name: 'typo', default: 'body1', type: 'string', description: 'Text typography'  },
        { name: 'separator', default: '" "', type: 'string', description: 'Words separator in the case where the property "mode" is sets to "word".'  },
        { name: 'selections', default: [], type: 'TextSelection[]', description: 'The selected ranges'  },
    ];
}
