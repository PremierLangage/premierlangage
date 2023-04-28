import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { Hint } from 'src/app/shared/models/hint.model';
import { AskService } from 'src/app/shared/services/ask.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'hint-component',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HintComponent extends AbstractComponent implements OnInit {
    readonly properties: Property[] = [
        { name: 'items', default: [] },
        { name: 'label', default: '' },
        { name: 'script', default: '' },
        { name: 'shouldConfirm', default: true },
        { name: 'consumedCount', default: 0 },
        { name: 'confirmMessage', default: '' },
        { name: 'confirmTitle', default: 'Use a hint ?' },
        { name: 'confirmOkTitle', default: 'Yes' },
        { name: 'confirmNoTitle', default: 'No' },
        { name: 'moreHintTitle', default: '+ More' },
    ];

    @Input()
    confirmMessage = '';

    @Input()
    confirmTitle = 'Use a hint ?';

    @Input()
    confirmOkTitle = 'Yes';

    @Input()
    confirmNoTitle = 'No';

    @Input()
    moreHintTitle = '+ More';

    @Input()
    label = '';

    @Input()
    script = '';

    @Input()
    items: Hint[] = [];

    @Input()
    shouldConfirm = true;

    @Input()
    consumedCount = 0;

    get showIcon(): boolean {
        return !!this.script || (this.consumedCount === 0 && !!this.items.length);
    }

    get hasMore(): boolean {
        return !this.script && (this.consumedCount > 0 && this.items.some(e => !e.consumed));
    }

    constructor(
        changes: ChangeDetectorRef,
        private readonly ask: AskService
    ) {
        super(changes);
    }

    ngOnInit() {
    }

    async consume() {
        if (this.shouldConfirm && this.consumedCount === 0) {
            const confirmed = await this.ask.confirmAsync({
                title: this.confirmTitle,
                message: this.confirmMessage,
                okTitle: this.confirmOkTitle,
                noTitle: this.confirmNoTitle,
            });

            if (confirmed) {
                this.next();
            }
        } else {
            this.next();
        }
    }

    private next() {
        if (this.script) {
            new Function(decodeURIComponent(this.script))();
            this.refresh();
        } else {
            for (const hint of this.items || []) {
                if (!hint.consumed) {
                    hint.consumed = true;
                    this.consumedCount++;
                    this.detectChanges();
                    this.checkMath();
                    return;
                }
            }
        }

    }

    trackBy(index: number, _: Hint) {
        return index;
    }
}

export class HintComponentDefinition implements ComponentDefinition {
    component = HintComponent;
    name = 'Hint';
    icon = 'hint.svg';
    selector = 'c-hint';
    description = `Provides a way to propose predefined or context based hints to a student.`;
    link = '/components/hint';
    usages = [
        { label: 'Basic Hint', path: 'playground/hint-basic.pl' },
        { label: 'Dynamic Hint', path: 'playground/hint-dynamic.pl' },
    ];
    properties = [
        { name: 'items', default: [], type: 'HintItem[]', description: 'A list of hints' },
        { name: 'label', default: '', type: 'string', description: 'The text displayed on  the side of the hint icon' },
        { name: 'confirmMessage', default: '', type: 'string', description: 'Message of the confirm dialog' },
        { name: 'confirmTitle', default: 'Use a hint?', type: 'string', description: 'Title of the confirm dialog' },
        { name: 'confirmOkTitle', default: 'Yes', type: 'string', description: 'Title of the confirm dialog positive button' },
        { name: 'confirmNoTitle', default: 'No', type: 'string', description: 'Title of the confirm dialog negavite button' },
        { name: 'moreHintTitle', default: '+ More', type: 'string', description: 'Title of the button to display more hints' },
    ];
}
