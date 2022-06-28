import { InjectionToken } from '@angular/core';

// tslint:disable: max-line-length

export interface ThemeColors {
    /** Overall foreground color. This color is only used if not overridden by a component */
    'foreground'?: string;
    /** Overall foreground color for error messages. This color is only used if not overridden by a component. */
    'errorForeground'?: string;
    /** Foreground color for description text providing additional information: string; for example for a label. */
    'descriptionForeground'?: string;
    /** Overall border color for focused elements. This color is only used if not overridden by a component. */
    'focusBorder'?: string;
    /** An extra border around elements to separate them from others for greater contrast. */
    'contrastBorder'?: string;
    /** An extra border around active elements to separate them from others for greater contrast. */
    'contrastActiveBorder'?: string;
    /** The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor. */
    'selection.background'?: string;
    /** Color for text separators. */
    'textSeparator.foreground'?: string;
    /** Foreground color for links in text. */
    'textLink.foreground'?: string;
    /** Foreground color for active links in text. */
    'textLink.activeForeground'?: string;
    /** Foreground color for preformatted text segments. */
    'textPreformat.foreground'?: string;
    /** Background color for block quotes in text. */
    'textBlockQuote.background'?: string;
    /** Border color for block quotes in text. */
    'textBlockQuote.border'?: string;
    /** Background color for code blocks in text. */
    'textCodeBlock.background'?: string;
    /** Shadow color of widgets such as find/replace inside the editor. */
    'widget.shadow'?: string;
    /** Input box background. */
    'input.background'?: string;
    /** Input box foreground. */
    'input.foreground'?: string;
    /** Input box border. */
    'input.border'?: string;
    /** Border color of activated options in input fields. */
    'inputOption.activeBorder'?: string;
    /** Input box foreground color for placeholder text. */
    'input.placeholderForeground'?: string;
    /** Input validation background color for information severity. */
    'inputValidation.infoBackground'?: string;
    /** Input validation border color for information severity. */
    'inputValidation.infoBorder'?: string;
    /** Input validation background color for information warning. */
    'inputValidation.warningBackground'?: string;
    /** Input validation border color for warning severity. */
    'inputValidation.warningBorder'?: string;
    /** Input validation background color for error severity. */
    'inputValidation.errorBackground'?: string;
    /** Input validation border color for error severity. */
    'inputValidation.errorBorder'?: string;
    /** Dropdown background. */
    'dropdown.background'?: string;
    /** Dropdown foreground. */
    'dropdown.foreground'?: string;
    /** Dropdown border. */
    'dropdown.border'?: string;
    /** List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus: string; an inactive does not. */
    'list.focusBackground'?: string;
    /** List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus: string; an inactive does not. */
    'list.focusForeground'?: string;
    /** List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus: string; an inactive does not. */
    'list.activeSelectionBackground'?: string;
    /** List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus: string; an inactive does not. */
    'list.activeSelectionForeground'?: string;
    /** List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus: string; an inactive does not. */
    'list.inactiveSelectionBackground'?: string;
    /** List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus: string; an inactive does not. */
    'list.inactiveSelectionForeground'?: string;
    /** List/Tree background when hovering over items using the mouse. */
    'list.hoverBackground'?: string;
    /** List/Tree foreground when hovering over items using the mouse. */
    'list.hoverForeground'?: string;
    /** List/Tree drag and drop background when moving items around using the mouse. */
    'list.dropBackground'?: string;
    /** List/Tree foreground color of the match highlights when searching inside the list/tree. */
    'list.highlightForeground'?: string;
    /** Quick picker color for grouping labels. */
    'pickerGroup.foreground'?: string;
    /** Quick picker color for grouping borders. */
    'pickerGroup.border'?: string;
    /** Button foreground color. */
    'button.foreground'?: string;
    /** Button background color. */
    'button.background'?: string;
    /** Button background color when hovering. */
    'button.hoverBackground'?: string;
    /** Badge background color. Badges are small information labels: string; e.g. for search results count. */
    'badge.background'?: string;
    /** Badge foreground color. Badges are small information labels: string; e.g. for search results count. */
    'badge.foreground'?: string;
    /** Scrollbar shadow to indicate that the view is scrolled. */
    'scrollbar.shadow'?: string;
    /** Slider background color. */
    'scrollbarSlider.background'?: string;
    /** Slider background color when hovering. */
    'scrollbarSlider.hoverBackground'?: string;
    /** Slider background color when active. */
    'scrollbarSlider.activeBackground'?: string;
    /** Background color of the progress bar that can show for long running operations. */
    'progressBar.background'?: string;
    /** Editor background color. */
    'editor.background'?: string;
    /** Editor default foreground color. */
    'editor.foreground'?: string;
    /** Background color of editor widgets: string; such as find/replace. */
    'editorWidget.background'?: string;
    /** Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget. */
    'editorWidget.border'?: string;
    /** Color of the editor selection. */
    'editor.selectionBackground'?: string;
    /** Color of the selected text for high contrast. */
    'editor.selectionForeground'?: string;
    /** Color of the selection in an inactive editor. */
    'editor.inactiveSelectionBackground'?: string;
    /** Color for regions with the same content as the selection. */
    'editor.selectionHighlightBackground'?: string;
    /** Color of the current search match. */
    'editor.findMatchBackground'?: string;
    /** Color of the other search matches. */
    'editor.findMatchHighlightBackground'?: string;
    /** Color the range limiting the search. */
    'editor.findRangeHighlightBackground'?: string;
    /** Highlight below the word for which a hover is shown. */
    'editor.hoverHighlightBackground'?: string;
    /** Background color of the editor hover. */
    'editorHoverWidget.background'?: string;
    /** Border color of the editor hover. */
    'editorHoverWidget.border'?: string;
    /** Color of active links. */
    'editorLink.activeForeground'?: string;
    /** Background color for text that got inserted. */
    'diffEditor.insertedTextBackground'?: string;
    /** Background color for text that got removed. */
    'diffEditor.removedTextBackground'?: string;
    /** Outline color for the text that got inserted. */
    'diffEditor.insertedTextBorder'?: string;
    /** Outline color for text that got removed. */
    'diffEditor.removedTextBorder'?: string;
    /** Current header background in inline merge-conflicts. */
    'merge.currentHeaderBackground'?: string;
    /** Current content background in inline merge-conflicts. */
    'merge.currentContentBackground'?: string;
    /** Incoming header background in inline merge-conflicts. */
    'merge.incomingHeaderBackground'?: string;
    /** Incoming content background in inline merge-conflicts. */
    'merge.incomingContentBackground'?: string;
    /** Common ancestor header background in inline merge-conflicts. */
    'merge.commonHeaderBackground'?: string;
    /** Common ancester content background in inline merge-conflicts. */
    'merge.commonContentBackground'?: string;
    /** Border color on headers and the splitter in inline merge-conflicts. */
    'merge.border'?: string;
    /** Current overview ruler foreground for inline merge-conflicts. */
    'editorOverviewRuler.currentContentForeground'?: string;
    /** Incoming overview ruler foreground for inline merge-conflicts. */
    'editorOverviewRuler.incomingContentForeground'?: string;
    /** Common ancestor overview ruler foreground for inline merge-conflicts. */
    'editorOverviewRuler.commonContentForeground'?: string;
    /** Background color for the highlight of line at the cursor position. */
    'editor.lineHighlightBackground'?: string;
    /** Background color for the border around the line at the cursor position. */
    'editor.lineHighlightBorder'?: string;
    /** Background color of highlighted ranges: string; like by quick open and find features. */
    'editor.rangeHighlightBackground'?: string;
    /** Color of the editor cursor. */
    'editorCursor.foreground'?: string;
    /** Color of whitespace characters in the editor. */
    'editorWhitespace.foreground'?: string;
    /** Color of the editor indentation guides. */
    'editorIndentGuide.background'?: string;
    /** Color of editor line numbers. */
    'editorLineNumber.foreground'?: string;
    /** Color of the editor rulers. */
    'editorRuler.foreground'?: string;
    /** Foreground color of editor code lenses */
    'editorCodeLens.foreground'?: string;
    /** Background color behind matching brackets */
    'editorBracketMatch.background'?: string;
    /** Color for matching brackets boxes */
    'editorBracketMatch.border'?: string;
    /** Color of the overview ruler border. */
    'editorOverviewRuler.border'?: string;
    /** Background color of the editor gutter. The gutter contains the glyph margins and the line numbers. */
    'editorGutter.background'?: string;
    /** Foreground color of error squigglies in the editor. */
    'editorError.foreground'?: string;
    /** Border color of error squigglies in the editor. */
    'editorError.border'?: string;
    /** Foreground color of warning squigglies in the editor. */
    'editorWarning.foreground'?: string;
    /** Border color of warning squigglies in the editor. */
    'editorWarning.border'?: string;
    /** Editor marker navigation widget error color. */
    'editorMarkerNavigationError.background'?: string;
    /** Editor marker navigation widget warning color. */
    'editorMarkerNavigationWarning.background'?: string;
    /** Editor marker navigation widget background. */
    'editorMarkerNavigation.background'?: string;
    /** Background color of the suggest widget. */
    'editorSuggestWidget.background'?: string;
    /** Border color of the suggest widget. */
    'editorSuggestWidget.border'?: string;
    /** Foreground color of the suggest widget. */
    'editorSuggestWidget.foreground'?: string;
    /** Background color of the selected entry in the suggest widget. */
    'editorSuggestWidget.selectedBackground'?: string;
    /** Color of the match highlights in the suggest widget. */
    'editorSuggestWidget.highlightForeground'?: string;
    /** Background color of a symbol during read-access: string; like reading a variable. */
    'editor.wordHighlightBackground'?: string;
    /** Background color of a symbol during write-access: string; like writing to a variable. */
    'editor.wordHighlightStrongBackground'?: string;
    /** Background color of the peek view title area. */
    'peekViewTitle.background'?: string;
    /** Color of the peek view title. */
    'peekViewTitleLabel.foreground'?: string;
    /** Color of the peek view title info. */
    'peekViewTitleDescription.foreground'?: string;
    /** Color of the peek view borders and arrow. */
    'peekView.border'?: string;
    /** Background color of the peek view result list. */
    'peekViewResult.background'?: string;
    /** Foreground color for line nodes in the peek view result list. */
    'peekViewResult.lineForeground'?: string;
    /** Foreground color for file nodes in the peek view result list. */
    'peekViewResult.fileForeground'?: string;
    /** Background color of the selected entry in the peek view result list. */
    'peekViewResult.selectionBackground'?: string;
    /** Foreground color of the selected entry in the peek view result list. */
    'peekViewResult.selectionForeground'?: string;
    /** Background color of the peek view editor. */
    'peekViewEditor.background'?: string;
    /** Background color of the gutter in the peek view editor. */
    'peekViewEditorGutter.background'?: string;
    /** Match highlight color in the peek view result list. */
    'peekViewResult.matchHighlightBackground'?: string;
    /** Match highlight color in the peek view editor. */
    'peekViewEditor.matchHighlightBackground'?: string;
}

/** Definition of a Theme */
export interface ThemeDefinition  {
    id: string;
    base: monaco.editor.BuiltinTheme;
    inherit: boolean;
    rules: monaco.editor.ITokenThemeRule[];
    colors: ThemeColors;
}

/** InjectionToken to provides new theme to the editor */
export const THEME_PROVIDERS = new InjectionToken<ThemeDefinition[]>('Theme Provider');
