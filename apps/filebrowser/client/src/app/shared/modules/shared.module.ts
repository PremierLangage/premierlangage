/* CORE  */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* MATERIAL  */
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

// TOASTR
import { ToastrModule } from 'ngx-toastr';

// PIPES
import { TrustHtmlPipe } from '../pipes/trust-html.pipe';
import { TrustUrlPipe } from '../pipes/trust-url.pipe';
import { TrustScriptPipe } from '../pipes/trust-script.pipe';
import { TrustStylePipe } from '../pipes/trust-style.pipe';

// DIRECTIVES
import { AutofocusDirective } from '../directives/autofocus.directive';
import { RunScriptsDirective } from '../directives/run-scripts.directive';
import { DraggableDirective } from '../directives/draggable.directive';
import { DroppableDirective } from '../directives/droppable.directive';
import { TreeNodeDirective } from '../directives/tree-node.directive';

// COMPONENT
import { PromptComponent } from '../components/prompt/prompt.component';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { TreeComponent } from '../components/tree/tree.component';

@NgModule({
    declarations: [
        // COMPONENTS
        TreeComponent,
        PromptComponent,
        ConfirmComponent,

        // DIRECTIVES
        DraggableDirective,
        DroppableDirective,
        AutofocusDirective,
        RunScriptsDirective,
        TreeNodeDirective,

        // PIPES
        TrustHtmlPipe,
        TrustUrlPipe,
        TrustScriptPipe,
        TrustStylePipe,
    ],
    imports: [
        // CORE
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
          cookieName: 'csrftoken',
          headerName: 'X-CSRFToken'
        }),

        // MATERIAL
        MatDialogModule,
        MatTooltipModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        DragDropModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        MatChipsModule,
        MatDividerModule,
        MatBadgeModule,
        MatAutocompleteModule,
        ScrollingModule,
        MatTreeModule,
        MatCheckboxModule,
        MatSelectModule,

        // TOASTR
        ToastrModule.forRoot({
            preventDuplicates: true,
        }),

    ],
    exports: [
        // CORE
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // MATERIAL
        MatDialogModule,
        MatTooltipModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        DragDropModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        MatChipsModule,
        MatDividerModule,
        MatBadgeModule,
        MatAutocompleteModule,
        MatTableModule,
        ScrollingModule,
        MatTreeModule,
        MatCheckboxModule,
        MatSelectModule,

        // TOAST
        ToastrModule,

        // COMPONENTS
        TreeComponent,
        PromptComponent,
        ConfirmComponent,

        // DIRECTIVES
        AutofocusDirective,
        DraggableDirective,
        DroppableDirective,
        RunScriptsDirective,
        TreeNodeDirective,

        // PIPES
        TrustHtmlPipe,
        TrustUrlPipe,
        TrustScriptPipe,
        TrustStylePipe,
    ],
    entryComponents: [
        PromptComponent,
        ConfirmComponent,
    ],
})
export class SharedModule { }
