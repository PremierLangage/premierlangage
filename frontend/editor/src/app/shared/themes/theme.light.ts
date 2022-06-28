import { ThemeDefinition } from './theme';

export class LightTheme implements ThemeDefinition {
    id = 'light-theme';
    base: monaco.editor.BuiltinTheme = 'vs';
    inherit = true;
    rules = [
        { token: 'text', foreground: '000000' },
        { token: 'operator', foreground: '000000' },
    ];
    colors = {};
}
