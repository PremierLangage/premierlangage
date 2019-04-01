import { Subject } from 'rxjs';

// tslint:disable: max-line-length

export namespace Settings {

    /** key used to store the settings into localStorage */
    const STORAGE_KEY = '__editor_settings__';

    /** Event that emits when the settings changes */
    export const changed: Subject<Setting[]> = new Subject();

    /** Group name for editor settings */
    export const EDITOR_KEY = 'editor';

    /** Group name for git settings */
    export const GIT_KEY = 'git';

    /** The types of settings */
    export enum Types {
        Checkbox = 'Checkbox',
        Number = 'Number',
        Input = 'Input',
        Dropdown = 'Dropdown',
    }

    /** Representation of a Setting. */
    export interface Setting {
        /** the type of the setting */
        type: Types;
        /** the name of the setting */
        name: string;
        /** the group of the setting */
        group: string;
        /** the value of the setting */
        value: any;
        /** the list of values in case of dropdown setting */
        choices?: any[];
        /** an optional commentary */
        comment?: string;
        /** is the setting editable? */
        hidden?: boolean;
    }

    export interface Group {
        /** the title of the group */
        title: string;
        /** the settings of the group */
        settings?: Settings.Setting[];
    }

    /**
     * Gets the setting object with the given `group` and the given `name` inside `settings` array.
     * @param settings an array of `Setting` objects
     * @param group the group of the setting object to find.
     * @param name the name of the setting object to find.
     */
    export function get(settings: Setting[], group: string, name: string) {
        return settings.find(item => item.group === group && item.name === name);
    }

    /** Gets all settings */
    export function getAll(): Setting[] {
        const defaults: Setting[] = [
            // Suggestion
            {
                name: 'acceptSuggestionOnCommitCharacter', group: 'editor.suggestions', type: Types.Checkbox,
                value: true,
                comment: 'Accept suggestions on provider defined characters. For example in JavaScript the semi-colon (;) is a commit character'
            },
            {
                name: 'acceptSuggestionOnEnter', group: 'editor.suggestions', type: Types.Dropdown, value: 'on',
                choices: ['on', 'smart', 'off'],
                comment: 'Controls whether suggestions should be accepted on Enter, in addition to Tab. Helps to avoid ambiguity between inserting new lines or accepting suggestions.',
            },
            {
                name: 'accessibilitySupport', group: 'editor', type: Types.Dropdown, value: 'auto',
                choices: ['auto', 'off', 'on'],
                comment: 'Controls whether the editor should run in a mode where it is optimized for screen readers.',
            },
            {
                name: 'autoClosingBrackets', group: 'editor', type: Types.Dropdown, value: 'languageDefined',
                choices: ['always', 'languageDefined', 'beforeWhitespace', 'never'],
                comment: 'Controls whether the editor should automatically close brackets after the user adds an opening bracket.',
            },
            {
                name: 'autoClosingQuotes', group: 'editor', type: Types.Dropdown, value: 'languageDefined',
                choices: ['always', 'languageDefined', 'beforeWhitespace', 'never'],
                comment: 'Controls whether the editor should automatically close quotes after the user adds an opening quote.',
            },
            {
                name: 'autoIndent', group: 'editor', type: Types.Checkbox, value: false,
                comment: 'Enable auto indentation adjustment.',
            },
            {
                name: 'autoSurround', group: 'editor', type: Types.Dropdown, value: 'languageDefined',
                choices: ['languageDefined', 'quotes', 'brackets', 'never'],
                comment: 'Controls whether the editor should automatically surround selections.',
            },
            { name: 'automaticLayout', group: 'editor', type: Types.Checkbox, value: true, hidden: true },
            {
                name: 'codeLens', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Controls whether the editor should show CodeLens',
            },
            {
                name: 'colorDecorators', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Controls whether the editor should render the inline color decorators and color picker',
            },
            {
                name: 'copyWithSyntaxHighlighting', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Controls whether syntax highlight should be copied into the clipboard.',
            },
            // Cursor
            {
                name: 'cursorBlinking', group: 'editor.cursor', type: Types.Dropdown, value: 'blink',
                comment: 'Control the cursor animation style.',
                choices: ['blink', 'smooth', 'phase', 'expand', 'solid'],
            },
            {
                name: 'cursorSmoothCaretAnimation', group: 'editor.cursor', type: Types.Checkbox, value: false,
                comment: 'Controls whether the smooth caret animation should be enabled.',
            },
            {
                name: 'cursorStyle', group: 'editor.cursor', type: Types.Dropdown, value: 'line',
                comment: 'Controls the cursor style.',
                choices: ['block', 'block-outline', 'line', 'line-thin', 'underline', 'underline-thin'],
            },
            {
                name: 'cursorWidth', group: 'editor.cursor', type: Types.Number, value: 0,
                comment: 'Controls the width of the cursor when Editor: Cursor Style is set to line.',

            },
            {
                name: 'dragAndDrop', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Controls if the editor should allow to move selections via drag and drop.',
            },
            {
                name: 'emptySelectionClipboard', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Copying without a selection copies the current line.',
            },
            // { name: 'extraEditorClassName', group: 'editor', type: SettingTypes.Input, value: '', },
            {
                name: 'fastScrollSensitivity', group: 'editor', type: Types.Number, value: 5,
                comment: 'Scrolling speed mulitiplier when pressing Alt.',
            },
            // { name: 'find', group: 'editor', type: SettingTypes.Input, value: '', },
            {
                name: 'folding', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Controls whether the editor has code folding enabled',
            },
            {
                name: 'foldingStrategy', group: 'editor', type: Types.Dropdown, value: 'auto',
                choices: ['auto', 'indentation'],
                comment: `Selects the folding strategy. 'auto' uses the strategies contributed for the current document, 'indentation' uses the indentation based folding strategy`
            },
            // FONT
            {
                name: 'fontFamily', group: 'editor.font', type: Types.Input, value: 'Menlo,Monaco,monospace',
                comment: 'Controls the font family',
            },
            {
                name: 'fontLigatures', group: 'editor.font', type: Types.Checkbox, value: false,
                comment: 'Enables/Disables font lignatures',
            },
            {
                name: 'fontSize', group: 'editor.font', type: Types.Number, value: 12,
                comment: 'Controls the font size in pixels.',
            },
            {
                name: 'fontWeight', group: 'editor.font', type: Types.Dropdown, value: 'normal',
                comment: 'Controls the font weight.', choices: ['normal', 'bold', '100', '200', '300', '400', '500'],
            },

            // Formatting
            {
                name: 'formatOnPaste', group: 'editor.formatting', type: Types.Checkbox, value: false,
                comment: `Controls whether the editor should automatically format the pasted content. (Require a formatter)`,
            },
            {
                name: 'formatOnType', group: 'editor.formatting', type: Types.Checkbox, value: false,
                comment: `Controls whether the editor should automatically format the content each time. (Require a formatter)`,
            },

            {
                name: 'glyphMargin', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Enable the rendering of the glyph margin. Glyph margin is moslty used for debugging.',

            },
            {
                name: 'hideCursorInOverviewRuler', group: 'editor', type: Types.Checkbox, value: false,
                comment: 'Should the cursor be hidden in the overview ruler.',
            },
            {
                name: 'highlightActiveIndentGuide', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Enable highlighting of the active indent guide.',
            },
            {
                name: 'hover.delay', group: 'editor', type: Types.Number, value: 300,
                comment: 'Controls the delay in milliseconds after which the hover is shown.',
            },
            {
                name: 'hover.enabled', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Controls whether the hover is shown.',
            },
            {
                name: 'hover.sticky', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Controls whether the hover should remain visible when mouse is moved over it',
            },
            {
                name: 'iconsInSuggestions', group: 'editor.suggestions', type: Types.Checkbox, value: true,
                comment: 'Render icons in suggestions box.',
            },
            {
                name: 'letterSpacing', group: 'editor', type: Types.Number, value: 0,
                comment: 'Controls the letter spacing in pixels',
            },
            {
                name: 'lightbulb.enabled', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Control the behavior and rendering of the code action lightbulb.',
            },
            {
                name: 'lineHeight', group: 'editor', type: Types.Number, value: 0,
                comment: 'Controls the line height. Use 0 to compute the line height from the font size.',

            },
            {
                name: 'lineNumbers', group: 'editor', type: Types.Dropdown, value: 'on',
                choices: ['off', 'on', 'relative', 'interval'],
                comment: 'Controls the display of line numbers.',
            },
            {
                name: 'lineNumbersMinChars', group: 'editor', type: Types.Number, value: 5,
                comment: 'Control the width of line numbers, by reserving horizontal space for rendering at least an amount of digits.',

            },
            {
                name: 'links', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Controls whether the editor should detect links and make them clickable',
            },
            {
                name: 'matchBrackets', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Enable highlighting of matching brackets.',
            },
            // Minimap
            {
                name: 'minimap.enabled', group: 'editor.minimap', type: Types.Checkbox, value: true,
                comment: 'Enable the rendering of the minimap.',
            },
            {
                name: 'minimap.maxColumn', group: 'editor.minimap', type: Types.Number, value: 120,
                comment: 'Limit the width of the minimap to render at most a certain number of columns.',
            },
            {
                name: 'minimap.renderCharacters', group: 'editor.minimap', type: Types.Checkbox, value: true,
                comment: 'Render the actual text on a line (as opposed to color blocks).',
            },
            {
                name: 'minimap.showSlider', group: 'editor.minimap', type: Types.Dropdown, value: 'mouseover',
                comment: 'Control the behavior and rendering of the minimap.', choices: ['always', 'mouseover'],
            },
            {
                name: 'minimap.side', group: 'editor.minimap', type: Types.Dropdown, value: 'right',
                comment: 'Controls the side where to render the minimap.', choices: ['left', 'right'],
            },
            {
                name: 'mouseWheelScrollSensitivity', group: 'editor', type: Types.Number, value: 1,
                comment: 'A multiplier to be used on the deltaX and deltaY of mouse wheel scroll events.',
            },
            {
                name: 'mouseWheelZoom', group: 'editor', type: Types.Checkbox, value: false,
                comment: 'Zoom the font in the editor when using the mouse wheel in combination with holding Ctrl',
            },
            {
                name: 'multiCursorMergeOverlapping', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Merge multiple cursors when they are overlapping.',
            },
            {
                name: 'multiCursorModifier', group: 'editor', type: Types.Dropdown, value: 'alt',
                choices: ['ctrlCmd', 'alt'],
                comment: 'The modifier to be used to add multiple cursors with the mouse',
            },
            {
                name: 'occurrencesHighlight', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Enable semantic occurrences highlight.',
            },
            {
                name: 'overviewRulerBorder', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Controls if a border should be drawn around the overview ruler.',
            },
            {
                name: 'overviewRulerLanes', group: 'editor', type: Types.Number, value: 3,
                comment: 'Controls the number of decorations that can show up at the same position in the overview ruler.',
            },
            {
                name: 'parameterHints.cycle', group: 'editor', type: Types.Checkbox, value: false,
                comment: 'Controls whether the parameter hints menu cycles or closes when reaching the end of the list',
            },
            {
                name: 'parameterHints.enabled', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Enables a pop-up that shows parameter documentation and type information as you type',
            },
            {
                name: 'quickSuggestions', group: 'editor.suggestions', type: Types.Checkbox, value: true,
                comment: 'Enable quick suggestions'
            },
            {
                name: 'quickSuggestionsDelay', group: 'editor.suggestions', type: Types.Number, value: 10,
                comment: 'Controls the delay in milliseconds after which quick suggestions will show up.'
            },
            {
                name: 'renderControlCharacters', group: 'editor', type: Types.Checkbox, value: true, // default false
                comment: 'Enable rendering of control characters.'
            },
            {
                name: 'renderFinalNewline', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Render last line number when the file ends with a newline.',
            },
            {
                name: 'renderIndentGuides', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Enable rendering of indent guides.'
            },
            {
                name: 'renderLineHighlight', group: 'editor', type: Types.Dropdown, value: 'all',
                comment: 'Enable rendering of current line highlight.', choices: ['none', 'gutter', 'line', 'all']
            },
            {
                name: 'renderWhitespace', group: 'editor', type: Types.Dropdown, value: 'all',
                comment: 'Enable rendering of whitespace.', choices: ['none', 'boundary', 'all']
            },
            {
                name: 'revealHorizontalRightPadding', group: 'editor', type: Types.Number, value: 30,
                comment: 'When revealing the cursor, a virtual padding (px) is added to the cursor, turning it into a rectangle. This virtual padding ensures that the cursor gets revealed before hitting the edge of the viewport.'
            },
            {
                name: 'roundedSelection', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Render the editor selection with rounded borders'
            },
            {
                name: 'scrollBeyondLastColumn', group: 'editor', type: Types.Number, value: 5,
                comment: 'Enable that scrolling can go beyond the last column by a number of columns'
            },
            {
                name: 'scrollBeyondLastLine', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Enable that scrolling can go one screen size after the last line.'
            },
            {
                name: 'scrollbar.verticalScrollbarSize', group: 'editor.scrollBar', type: Types.Number, value: 7,
                comment: 'Vertical size of the scrollbar in px'
            },
            {
                name: 'scrollbar.horizontalScrollbarSize', group: 'editor.scrollBar', type: Types.Number, value: 7,
                comment: 'Horizontal size of the scrollbar in px'
            },
            {
                name: 'selectOnLineNumbers', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Should the corresponding line be selected when clicking on the line number?'
            },
            {
                name: 'selectionClipboard', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Enable Linux primary clipboard.'
            },
            {
                name: 'selectionHighlight', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Enable selection highlight.'
            },
            {
                name: 'showFoldingControls', group: 'editor', type: Types.Dropdown, value: 'mouseover',
                comment: 'Controls whether the fold controls on the gutter are automatically hidden.',
                choices: ['always', 'mouseover']
            },
            {
                name: 'showUnused', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Controls fading out of unused variables'
            },
            {
                name: 'smoothScrolling', group: 'editor', type: Types.Checkbox, value: false,
                comment: 'Enable that the editor animates scrolling to a position'
            },
            // Suggestions
            {
                name: 'snippetSuggestions', group: 'editor.suggestions', type: Types.Dropdown, value: 'inline',
                comment: 'Controls whether snippets are shown with other suggestions and how they are sorted.',
                choices: ['top', 'bottom', 'inline', 'none']
            },
            {
                name: 'suggestFontSize', group: 'editor.suggestions', type: Types.Number, value: 0,
                comment: 'Font size for the suggest widget. When set to 0, the value of Editor: Font Size is used.'
            },
            {
                name: 'suggestLineHeight', group: 'editor.suggestions', type: Types.Number, value: 0,
                comment: 'Line height for the suggest widget. When set to 0, the value of Editor: Line Height is used.'
            },
            {
                name: 'suggestOnTriggerCharacters', group: 'editor.suggestions', type: Types.Checkbox, value: true,
                comment: 'Enable the suggestion box to pop-up on trigger characters.'
            },
            {
                name: 'suggestSelection', group: 'editor.suggestions', type: Types.Dropdown, value: 'recentlyUsed',
                comment: 'Controls how suggestions are pre-selected when showing the suggest list.',
                choices: ['first', 'recentlyUsed', 'recentlyUsedByPrefix']
            },
            {
                name: 'tabCompletion', group: 'editor.suggestions', type: Types.Dropdown, value: 'on',
                comment: 'Enables tab completions.', choices: ['on', 'off', 'onlySnippets']
            },
            {
                name: 'theme', group: 'editor', type: Types.Dropdown, value: 'pl',
                comment: 'Specifies the color theme of the editor', choices: ['pl', 'vs', 'vs-dark'],
                hidden: true,
            },
            {
                name: 'useTabStops', group: 'editor', type: Types.Checkbox, value: true,
                comment: 'Inserting and deleting whitespace follows tabs stops.'
            },
            {
                name: 'wordBasedSuggestions', group: 'editor.suggestions', type: Types.Checkbox, value: true,
                comment: 'Controls whether completions should be computed based  on words in the document',
            },
            {
                name: 'wordSeparators', group: 'editor', type: Types.Input, value: '`~!@#$%^&*()-=+[{]}\|;:\'",.<>/?',
                comment: 'Characters that will be used as word separators when doing word related navigations or operations.'
            },
            {
                name: 'wordWrap', group: 'editor', type: Types.Dropdown, value: 'off',
                comment: 'Controls how lines should wrap.',
                choices: ['on', 'off', 'wordWrapColumn', 'bounded']
            },
            {
                name: 'wordWrapColumn', group: 'editor', type: Types.Number, value: 80,
                comment: 'Controls the wrapping column of the editor when Editor: Word Wrap is wordWrapColumn or bounded.'
            },
            {
                name: 'wrappingIndent', group: 'editor', type: Types.Dropdown, value: 'same',
                comment: 'Controls the indentation of wrapped lines.',
                choices: ['none', 'same', 'indent', 'deepIndent']
            },
            {
                name: 'blames', group: 'git', type: Types.Checkbox, value: false,
                comment: 'Annotates each line in the focused file with information from the revision which last modified the line.',
            },
        ];
        const settings: Setting[] = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaults;
        for (const item of defaults) {
            if (!settings.some(e => e.name === item.name && e.group === item.group)) {
                settings.push(item);
            }
        }
        return settings;
    }

    /**
     * Gets an object representation of all settings with the given `group` in `settings`
     * @param settings settings array
     * @param group group to extract
     */
    export function groups(settings: Setting[], group: string) {
        const items = settings.filter(setting => setting.group.startsWith(group));
        return items.reduce((acc: any, current, index, array) => {
            assign(acc, current.name, current.value);
            return acc;
        }, {});
    }

    /** Saves the settings and emits `changed` event with the new settings */
    export function save(settings: Setting[]) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        changed.next(settings);
    }


    function assign(obj, path, value) {
        const a = path.split('.');
        let o = obj;
        for (let i = 0; i < a.length - 1; i++) {
            const n = a[i];
            if (n in o) {
                o = o[n];
            } else {
                o[n] = {};
                o = o[n];
            }
        }
        o[a[a.length - 1]] = value;
    }

}

