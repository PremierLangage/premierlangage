/* angular core  */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* material design  */
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


import { ToastrModule } from 'ngx-toastr';

import { AutofocusDirective } from '../directives/autofocus.directive';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';
import { RunScriptsDirective } from '../directives/run-scripts.directive';
import { DraggableDirective } from '../directives/draggable.directive';
import { DroppableDirective } from '../directives/droppable.directive';

import { PromptComponent } from '../components/prompt/prompt.component';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { EmptyStateComponent } from '../components/empty-state/empty-state.component';

@NgModule({
    declarations: [
        PromptComponent,
        ConfirmComponent,
        EmptyStateComponent,
        DraggableDirective,
        DroppableDirective,
        AutofocusDirective,
        SanitizeHtmlPipe,
        RunScriptsDirective,
    ],
    imports: [
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

        ToastrModule.forRoot({
            preventDuplicates: true,
        }),

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

    ],
    exports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,

        ToastrModule,

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

        PromptComponent,
        ConfirmComponent,
        EmptyStateComponent,
        DraggableDirective,
        DroppableDirective,
        AutofocusDirective,
        SanitizeHtmlPipe,
        RunScriptsDirective,
    ],
    entryComponents: [
        PromptComponent,
        ConfirmComponent,
    ],
})
export class SharedModule { }
