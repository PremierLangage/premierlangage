import { Component } from '@angular/core';

@Component({
  selector: 'app-pleditor',
  templateUrl: './pleditor.component.html',
  styleUrls: ['./pleditor.component.css']
})
export class PlEditorComponent {
    editorOptions = {
      theme: 'vs', 
      language: 'javascript'
    };
    code: string= '';
}
