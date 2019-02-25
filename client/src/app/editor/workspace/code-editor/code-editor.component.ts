import { ViewEncapsulation, Component } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'code-editor',
    templateUrl: './code-editor.component.html',
    styleUrls: ['./code-editor.component.scss'],
  })
export class CodeEditorComponent {

    editorLoaded(editor) {
    }

}
