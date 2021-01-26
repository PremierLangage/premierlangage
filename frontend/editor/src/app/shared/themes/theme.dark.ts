// tslint:disable: max-line-length
import { ThemeDefinition } from './theme';
export class DarkTheme implements ThemeDefinition {
    id = 'dark-theme';
    base: monaco.editor.BuiltinTheme = 'vs-dark';
    inherit = true;
    rules = [
        /** haskell variable generic-type */
        { token: 'variable.other.generic-type.haskell', foreground: 'c678dd' },
        /** haskell storage type */
        { token: 'storage.type.haskell', foreground: 'd19a66' },
        /** support.variable.magic.python */
        { token: 'support.variable.magic.python', foreground: 'e06c75' },
        /** punctuation.separator.parameters.python */
        { token: 'punctuation.separator.period.python', foreground: 'abb2bf' },
        /** punctuation.separator.parameters.python */
        { token: 'punctuation.separator.element.python', foreground: 'abb2bf' },
        /** punctuation.separator.parameters.python */
        { token: 'punctuation.parenthesis.begin.python', foreground: 'abb2bf' },
        /** punctuation.separator.parameters.python */
        { token: 'punctuation.parenthesis.end.python', foreground: 'abb2bf' },
        /** variable.parameter.function.language.special.self.python */
        { token: 'variable.parameter.function.language.special.self.python', foreground: 'e5c07b' },
        /** storage.modifier.lifetime.rust */
        { token: 'storage.modifier.lifetime.rust', foreground: 'abb2bf' },
        /** support.function.std.rust */
        { token: 'support.function.std.rust', foreground: '61afef' },
        /** entity.name.lifetime.rust */
        { token: 'entity.name.lifetime.rust', foreground: 'e5c07b' },
        /** variable.language.rust */
        { token: 'variable.language.rust', foreground: 'e06c75' },
        /** support.constant.edge */
        { token: 'support.constant.edge', foreground: 'c678dd' },
        /** regexp constant character-class */
        { token: 'constant.other.character-class.regexp', foreground: 'e06c75' },
        /** regexp operator.quantifier */
        { token: 'keyword.operator.quantifier.regexp', foreground: 'd19a66' },
        /** punctuation.definition */
        { token: 'punctuation.definition.string.begin', foreground: '98c379' },
        /** punctuation.definition */
        { token: 'punctuation.definition.string.end', foreground: '98c379' },
        /** Text */
        { token: 'variable.parameter.function', foreground: 'abb2bf' },
        /** Comments */
        { token: 'comment', foreground: '7f848e' },
        /** Comments */
        { token: ' punctuation.definition.comment', foreground: '7f848e' },
        /** Comment Markup Link */
        { token: 'comment markup.link', foreground: '5c6370' },
        /** markup diff */
        { token: 'markup.changed.diff', foreground: 'e5c07b' },
        /** diff */
        { token: 'meta.diff.header.from-file', foreground: '61afef' },
        /** diff */
        { token: 'punctuation.definition.from-file.diff', foreground: '61afef' },
        /** inserted.diff */
        { token: 'markup.inserted.diff', foreground: '98c379' },
        /** deleted.diff */
        { token: 'markup.deleted.diff', foreground: 'e06c75' },
        /** c++ function */
        { token: 'meta.function.c', foreground: 'e06c75' },
        /** c++ function */
        { token: 'meta.function.cpp', foreground: 'e06c75' },
        /** c++ block */
        { token: 'punctuation.section.block.begin.bracket.curly.cpp', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.block.end.bracket.curly.cpp', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.terminator.statement.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.block.begin.bracket.curly.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.block.end.bracket.curly.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.parens.begin.bracket.round.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.parens.end.bracket.round.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.parameters.begin.bracket.round.c', foreground: 'abb2bf' },
        /** c++ block */
        { token: 'punctuation.section.parameters.end.bracket.round.c', foreground: 'abb2bf' },
        /** js/ts punctuation separator key-value */
        { token: 'punctuation.separator.key-value', foreground: 'abb2bf' },
        /** js/ts italic */
        { token: 'entity.other.attribute-name.js', fontStyle: 'italic' },
        /** js/ts italic */
        { token: 'entity.other.attribute-name.ts', fontStyle: 'italic' },
        /** js/ts italic */
        { token: 'entity.other.attribute-name.jsx', fontStyle: 'italic' },
        /** js/ts italic */
        { token: 'entity.other.attribute-name.tsx', fontStyle: 'italic' },
        /** js/ts italic */
        { token: 'variable.parameter', fontStyle: 'italic' },
        /** js/ts italic */
        { token: 'variable.language.super', fontStyle: 'italic' },
        /** js/ts import keyword */
        { token: 'keyword.operator.expression.import', foreground: '61afef' },
        /** math js/ts */
        { token: 'support.constant.math', foreground: 'e5c07b' },
        /** math property js/ts */
        { token: 'support.constant.property.math', foreground: 'd19a66' },
        /** js/ts variable.other.constant */
        { token: 'variable.other.constant', foreground: 'e5c07b' },
        /** java type */
        { token: 'storage.type.annotation.java', foreground: 'e5c07b' },
        /** java source */
        { token: 'source.java', foreground: 'e06c75' },
        /** java modifier.import */
        { token: 'punctuation.section.block.begin.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.block.end.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.definition.method-parameters.begin.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.definition.method-parameters.end.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'meta.method.identifier.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.method.begin.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.method.end.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.terminator.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.class.begin.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.class.end.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.inner-class.begin.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.inner-class.end.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'meta.method-call.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'storage.type.generic.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.class.begin.bracket.curly.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.class.end.bracket.curly.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.method.begin.bracket.curly.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.section.method.end.bracket.curly.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'punctuation.separator.period.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'meta.method.body.java', foreground: 'abb2bf' },
        /** java modifier.import */
        { token: 'meta.method.java', foreground: '61afef' },
        /** java modifier.import */
        { token: 'storage.modifier.import.java', foreground: 'e5c07b' },
        /** java modifier.import */
        { token: 'storage.type.java', foreground: 'e5c07b' },
        /** java variable.name */
        { token: 'meta.definition.variable.name.java', foreground: 'e06c75' },
        /** operator logical */
        { token: 'keyword.operator.logical.js', foreground: '56b6c2' },
        /** operator bitwise */
        { token: 'keyword.operator.bitwise', foreground: '56b6c2' },
        /** operator channel */
        { token: 'keyword.operator.channel', foreground: '56b6c2' },
        /** support.constant.property-value.scss */
        { token: 'support.constant.property-value.scss', foreground: 'd19a66' },
        /** support.constant.property-value.scss */
        { token: 'support.constant.property-value.css', foreground: 'd19a66' },
        /** CSS/SCSS/LESS Operators */
        { token: 'keyword.operator.css', foreground: '56b6c2' },
        /** CSS/SCSS/LESS Operators */
        { token: 'keyword.operator.scss', foreground: '56b6c2' },
        /** CSS/SCSS/LESS Operators */
        { token: 'keyword.operator.less', foreground: '56b6c2' },
        /** css color standard name */
        { token: 'support.constant.color.w3c-standard-color-name.css', foreground: 'd19a66' },
        /** css color standard name */
        { token: 'support.constant.color.w3c-standard-color-name.scss', foreground: 'd19a66' },
        /** css comma */
        { token: 'punctuation.separator.list.comma.css', foreground: 'abb2bf' },
        /** css attribute-name.id */
        { token: 'support.constant.color.w3c-standard-color-name.css', foreground: 'd19a66' },
        /** css property-name */
        { token: 'support.type.vendored.property-name.css', foreground: '56b6c2' },
        /** js/ts template-expression */
        { token: 'punctuation.definition.template-expression.begin', foreground: 'e06c75' },
        /** js/ts template-expression */
        { token: 'punctuation.definition.template-expression.end', foreground: 'e06c75' },
        /** js/ts module */
        { token: 'support.module.node', foreground: 'e5c07b' },
        /** js/ts module */
        { token: 'support.type.object.module', foreground: 'e5c07b' },
        /** js/ts module */
        { token: 'support.module.node', foreground: 'e5c07b' },
        /** entity.name.type.module */
        { token: 'entity.name.type.module', foreground: 'e5c07b' },
        /** js variable readwrite */
        { token: 'variable.other.readwrite', foreground: 'e06c75' },
        /** js variable readwrite */
        { token: 'meta.object-literal.key', foreground: 'e06c75' },
        /** js variable readwrite */
        { token: 'support.variable.property', foreground: 'e06c75' },
        /** js variable readwrite */
        { token: 'support.variable.object.process', foreground: 'e06c75' },
        /** js variable readwrite */
        { token: 'support.variable.object.node', foreground: 'e06c75' },
        /** comment */
        { token: 'comment.line.double-slash', fontStyle: 'italic' },
        /** comment */
        { token: 'comment.block.documentation', fontStyle: 'italic' },
        /** js/ts json */
        { token: 'support.constant.json', foreground: 'd19a66' },
        /** js/ts Keyword */
        { token: 'keyword.operator.expression.instanceof', foreground: 'c678dd' },
        /** js/ts Keyword */
        { token: 'keyword.operator.new', foreground: 'c678dd' },
        /** js/ts Keyword */
        { token: 'keyword.operator.ternary', foreground: 'c678dd' },
        /** js/ts Keyword */
        { token: 'keyword.operator.optional', foreground: 'c678dd' },
        /** js/ts console */
        { token: 'support.type.object.console', foreground: 'e06c75' },
        /** js/ts support.variable.property.process */
        { token: 'support.variable.property.process', foreground: 'd19a66' },
        /** js console function */
        { token: 'entity.name.function', foreground: '61afef' },
        /** js console function */
        { token: 'support.function.console', foreground: '61afef' },
        /** operator */
        { token: 'keyword.operator', foreground: '56b6c2' },
        /** operator */
        { token: 'keyword.operator.delete', foreground: 'c678dd' },
        /** js dom */
        { token: 'support.type.object.dom', foreground: '56b6c2' },
        /** js dom variable */
        { token: 'support.variable.dom', foreground: 'e06c75' },
        /** js dom variable */
        { token: 'support.variable.property.dom', foreground: 'e06c75' },
        /** keyword.operator */
        { token: 'keyword.operator.arithmetic', foreground: '56b6c2' },
        /** keyword.operator */
        { token: 'keyword.operator.comparison', foreground: '56b6c2' },
        /** keyword.operator */
        { token: 'keyword.operator.decrement', foreground: '56b6c2' },
        /** keyword.operator */
        { token: 'keyword.operator.increment', foreground: '56b6c2' },
        /** C operator assignment */
        { token: 'keyword.operator.assignment.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.comparison.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.increment.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.decrement.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.bitwise.shift.c', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.assignment.cpp', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.comparison.cpp', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.cpp', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.increment.cpp', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.decrement.cpp', foreground: 'c678dd' },
        /** C operator assignment */
        { token: 'keyword.operator.bitwise.shift.cpp', foreground: 'c678dd' },
        /** Punctuation */
        { token: 'punctuation.separator.delimiter', foreground: 'abb2bf' },
        /** Other punctuation .c */
        { token: 'punctuation.separator.c', foreground: 'c678dd' },
        /** Other punctuation .c */
        { token: 'punctuation.separator.cpp', foreground: 'c678dd' },
        /** C type posix-reserved */
        { token: 'support.type.posix-reserved.c', foreground: '56b6c2' },
        /** C type posix-reserved */
        { token: 'support.type.posix-reserved.cpp', foreground: '56b6c2' },
        /** keyword.operator.sizeof.c */
        { token: 'keyword.operator.sizeof.c', foreground: 'c678dd' },
        /** keyword.operator.sizeof.c */
        { token: 'keyword.operator.sizeof.cpp', foreground: 'c678dd' },
        /** python parameter */
        { token: 'variable.parameter.function.language.python', foreground: 'd19a66' },
        /** python type */
        { token: 'support.type.python', foreground: '56b6c2' },
        /** python logical */
        { token: 'keyword.operator.logical.python', foreground: 'c678dd' },
        /** pyCs */
        { token: 'variable.parameter.function.python', foreground: 'd19a66' },
        /** python block */
        { token: 'punctuation.definition.arguments.begin.python', foreground: 'abb2bf' },
        /** python block */
        { token: 'punctuation.definition.arguments.end.python', foreground: 'abb2bf' },
        /** python block */
        { token: 'punctuation.separator.arguments.python', foreground: 'abb2bf' },
        /** python block */
        { token: 'punctuation.definition.list.begin.python', foreground: 'abb2bf' },
        /** python block */
        { token: 'punctuation.definition.list.end.python', foreground: 'abb2bf' },
        /** python function-call.generic */
        { token: 'meta.function-call.generic.python', foreground: '61afef' },
        /** python placeholder reset to normal string */
        { token: 'constant.character.format.placeholder.other.python', foreground: '98c379' },
        /** Delimiters */
        { token: 'none', foreground: 'abb2bf' },
        /** Operators */
        { token: 'keyword.operator', foreground: 'abb2bf' },
        /** Compound Assignment Operators */
        { token: 'keyword.operator.assignment.compound', foreground: 'c678dd' },
        /** Keywords */
        { token: 'keyword', foreground: 'c678dd' },
        /** Variables */
        { token: 'variable', foreground: 'e06c75' },
        /** Language variables */
        { token: 'variable.language', foreground: 'e5c07b' },
        /** Java Variables */
        { token: 'token.variable.parameter.java', foreground: 'abb2bf' },
        /** Java Imports */
        { token: 'import.storage.java', foreground: 'e5c07b' },
        /** Packages */
        { token: 'token.package.keyword', foreground: 'c678dd' },
        /** Packages */
        { token: 'token.package', foreground: 'abb2bf' },
        /** Functions */
        { token: 'entity.name.function', foreground: '61afef' },
        /** Functions */
        { token: 'meta.require', foreground: '61afef' },
        /** Functions */
        { token: 'support.function.any-method', foreground: '61afef' },
        /** Functions */
        { token: 'variable.function', foreground: '61afef' },
        /** Classes */
        { token: 'entity.name.type.namespace', foreground: 'e5c07b' },
        /** Classes */
        { token: 'support.class', foreground: 'e5c07b' },
        /** Classes */
        { token: ' entity.name.type.class', foreground: 'e5c07b' },
        /** Class name */
        { token: 'entity.name.class.identifier.namespace.type', foreground: 'e5c07b' },
        /** Class name */
        { token: 'entity.name.class', foreground: 'e5c07b' },
        /** Class name */
        { token: 'variable.other.class.js', foreground: 'e5c07b' },
        /** Class name */
        { token: 'variable.other.class.ts', foreground: 'e5c07b' },
        /** Class name php */
        { token: 'variable.other.class.php', foreground: 'e06c75' },
        /** Type Name */
        { token: 'entity.name.type', foreground: 'e5c07b' },
        /** Keyword Control */
        { token: 'keyword.control', foreground: 'c678dd' },
        /** Python Keyword Control */
        { token: 'keyword.control.import.python', fontStyle: 'italic' },
        /** Python Keyword Control */
        { token: 'keyword.control.flow.python', fontStyle: 'italic' },
        /** Control Elements */
        { token: 'control.elements', foreground: 'd19a66' },
        /** Control Elements */
        { token: ' keyword.operator.less', foreground: 'd19a66' },
        /** Methods */
        { token: 'keyword.other.special-method', foreground: '61afef' },
        /** Storage */
        { token: 'storage', foreground: 'c678dd' },
        /** Storage JS TS */
        { token: 'token.storage', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.delete', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.in', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.of', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.instanceof', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.new', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.typeof', foreground: 'c678dd' },
        /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
        { token: 'keyword.operator.expression.void', foreground: 'c678dd' },
        /** Java Storage */
        { token: 'token.storage.type.java', foreground: 'e5c07b' },
        /** Support */
        { token: 'support.function', foreground: '56b6c2' },
        /** Support type */
        { token: 'support.type.property-name', foreground: 'abb2bf' },
        /** Support type */
        { token: 'support.constant.property-value', foreground: 'abb2bf' },
        /** Support type */
        { token: 'support.constant.font-name', foreground: 'd19a66' },
        /** Meta tag */
        { token: 'meta.tag', foreground: 'abb2bf' },
        /** Strings, Inherited Class */
        { token: 'string', foreground: '98c379' },
        /** Strings, Inherited Class */
        { token: ' entity.other.inherited-class', foreground: '98c379' },
        /** Constant other symbol */
        { token: 'constant.other.symbol', foreground: '56b6c2' },
        /** Integers */
        { token: 'constant.numeric', foreground: 'd19a66' },
        /** Floats */
        { token: 'none', foreground: 'd19a66' },
        /** Boolean */
        { token: 'none', foreground: 'd19a66' },
        /** Constants */
        { token: 'constant', foreground: 'd19a66' },
        /** Constants */
        { token: 'punctuation.definition.constant', foreground: 'd19a66' },
        /** Tags */
        { token: 'entity.name.tag', foreground: 'e06c75' },
        /** Attributes */
        { token: 'entity.other.attribute-name', foreground: 'd19a66' },
        /** Attribute IDs */
        { token: 'entity.other.attribute-name.id', foreground: '61afef' },
        /** Attribute class */
        { token: 'entity.other.attribute-name.class.css', foreground: 'd19a66' },
        /** Selector */
        { token: 'meta.selector', foreground: 'c678dd' },
        /** Values */
        { token: 'none', foreground: 'd19a66' },
        /** Headings */
        { token: 'markup.heading', foreground: 'e06c75' },
        /** Headings */
        { token: 'markup.heading punctuation.definition.heading', foreground: '61afef' },
        /** Headings */
        { token: ' entity.name.section', foreground: '61afef' },
        /** Units */
        { token: 'keyword.other.unit', foreground: 'e06c75' },
        /** Bold */
        { token: 'markup.bold', foreground: 'd19a66' },
        /** Bold */
        { token: 'todo.bold', foreground: 'd19a66' },
        /** Bold */
        { token: 'punctuation.definition.bold', foreground: 'e5c07b' },
        /** Italic */
        { token: 'markup.italic', foreground: 'c678dd' },
        /** Italic */
        { token: ' punctuation.definition.italic', foreground: 'c678dd' },
        /** Italic */
        { token: 'todo.emphasis', foreground: 'c678dd' },
        /** Italic */
        { token: 'emphasis md', foreground: 'c678dd' },
        /** [VSCODE-CUSTOM] Markdown headings */
        { token: 'entity.name.section.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown heading Punctuation Definition */
        { token: 'punctuation.definition.heading.markdown', foreground: 'e06c75' },
        /** punctuation.definition.list.begin.markdown */
        { token: 'punctuation.definition.list.begin.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown heading setext */
        { token: 'markup.heading.setext', foreground: 'abb2bf' },
        /** [VSCODE-CUSTOM] Markdown Punctuation Definition Bold */
        { token: 'punctuation.definition.bold.markdown', foreground: 'd19a66' },
        /** [VSCODE-CUSTOM] Markdown Inline Raw */
        { token: 'markup.inline.raw.markdown', foreground: '98c379' },
        /** [VSCODE-CUSTOM] Markdown Inline Raw */
        { token: 'markup.inline.raw.string.markdown', foreground: '98c379' },
        /** [VSCODE-CUSTOM] Markdown List Punctuation Definition */
        { token: 'punctuation.definition.list.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown Quote */
        { token: 'markup.quote.markdown', foreground: '5c6370' },
        /** [VSCODE-CUSTOM] Markdown Punctuation Definition String */
        { token: 'punctuation.definition.string.begin.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown Punctuation Definition String */
        { token: 'punctuation.definition.string.end.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown Punctuation Definition String */
        { token: 'punctuation.definition.metadata.markdown', foreground: 'e06c75' },
        /** beginning.punctuation.definition.list.markdown */
        { token: 'beginning.punctuation.definition.list.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown Punctuation Definition Link */
        { token: 'punctuation.definition.metadata.markdown', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] Markdown Underline Link/Image */
        { token: 'markup.underline.link.markdown', foreground: 'c678dd' },
        /** [VSCODE-CUSTOM] Markdown Underline Link/Image */
        { token: 'markup.underline.link.image.markdown', foreground: 'c678dd' },
        /** [VSCODE-CUSTOM] Markdown Link Title/Description */
        { token: 'string.other.link.title.markdown', foreground: '61afef' },
        /** [VSCODE-CUSTOM] Markdown Link Title/Description */
        { token: 'string.other.link.description.markdown', foreground: '61afef' },
        /** markup.italic.markdown */
        { token: 'markup.italic.markdown', fontStyle: 'italic' },
        /** markup.bold.markdown */
        { token: 'markup.bold.markdown', fontStyle: 'bold' },
        /** Regular Expressions */
        { token: 'string.regexp', foreground: '56b6c2' },
        /** Escape Characters */
        { token: 'constant.character.escape', foreground: '56b6c2' },
        /** Embedded */
        { token: 'punctuation.section.embedded', foreground: 'e06c75' },
        /** Embedded */
        { token: ' variable.interpolation', foreground: 'e06c75' },
        /** Illegal */
        { token: 'invalid.illegal', foreground: 'ffffff' },
        /** Broken */
        { token: 'invalid.broken', foreground: 'ffffff' },
        /** Deprecated */
        { token: 'invalid.deprecated', foreground: 'ffffff' },
        /** Unimplemented */
        { token: 'invalid.unimplemented', foreground: 'ffffff' },
        /** Source Json Meta Structure Dictionary Json > String Quoted Json */
        { token: 'source.json meta.structure.dictionary.json > string.quoted.json', foreground: 'e06c75' },
        /** Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String */
        { token: 'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string', foreground: 'e06c75' },
        /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
        { token: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json', foreground: '98c379' },
        /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
        { token: 'source.json meta.structure.array.json > value.json > string.quoted.json', foreground: '98c379' },
        /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
        { token: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation', foreground: '98c379' },
        /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
        { token: 'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation', foreground: '98c379' },
        /** Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json */
        { token: 'source.json meta.structure.dictionary.json > constant.language.json', foreground: '56b6c2' },
        /** Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json */
        { token: 'source.json meta.structure.array.json > constant.language.json', foreground: '56b6c2' },
        /** [VSCODE-CUSTOM] JSON Property Name */
        { token: 'support.type.property-name.json', foreground: 'e06c75' },
        /** [VSCODE-CUSTOM] JSON Punctuation for Property Name */
        { token: 'support.type.property-name.json punctuation', foreground: 'e06c75' },
        /** laravel blade tag */
        { token: 'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade', foreground: 'c678dd' },
        /** laravel blade @ */
        { token: 'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade', foreground: 'c678dd' },
        /** use statement for other classes */
        { token: 'support.other.namespace.use.php', foreground: 'e5c07b' },
        /** use statement for other classes */
        { token: 'support.other.namespace.use-as.php', foreground: 'e5c07b' },
        /** use statement for other classes */
        { token: 'support.other.namespace.php', foreground: 'e5c07b' },
        /** use statement for other classes */
        { token: 'entity.other.alias.php', foreground: 'e5c07b' },
        /** use statement for other classes */
        { token: 'meta.interface.php', foreground: 'e5c07b' },
        /** error suppression */
        { token: 'keyword.operator.error-control.php', foreground: 'c678dd' },
        /** php instanceof */
        { token: 'keyword.operator.type.php', foreground: 'c678dd' },
        /** style double quoted array index normal begin */
        { token: 'punctuation.section.array.begin.php', foreground: 'abb2bf' },
        /** style double quoted array index normal end */
        { token: 'punctuation.section.array.end.php', foreground: 'abb2bf' },
        /** php illegal.non-null-typehinted */
        { token: 'invalid.illegal.non-null-typehinted.php', foreground: 'f44747' },
        /** php types */
        { token: 'storage.type.php', foreground: 'e5c07b' },
        /** php types */
        { token: 'meta.other.type.phpdoc.php', foreground: 'e5c07b' },
        /** php types */
        { token: 'keyword.other.type.php', foreground: 'e5c07b' },
        /** php types */
        { token: 'keyword.other.array.phpdoc.php', foreground: 'e5c07b' },
        /** php call-function */
        { token: 'meta.function-call.php', foreground: '61afef' },
        /** php call-function */
        { token: 'meta.function-call.object.php', foreground: '61afef' },
        /** php call-function */
        { token: 'meta.function-call.static.php', foreground: '61afef' },
        /** php function-resets */
        { token: 'punctuation.definition.parameters.begin.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.parameters.end.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.separator.delimiter.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.section.scope.begin.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.section.scope.end.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.terminator.expression.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.arguments.begin.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.arguments.end.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.storage-type.begin.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.storage-type.end.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.array.begin.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.array.end.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.begin.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.end.bracket.round.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.begin.bracket.curly.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.end.bracket.curly.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.section.switch-block.end.bracket.curly.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.section.switch-block.start.bracket.curly.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.section.switch-block.begin.bracket.curly.php', foreground: 'abb2bf' },
        /** php function-resets */
        { token: 'punctuation.definition.section.switch-block.end.bracket.curly.php', foreground: 'abb2bf' },
        /** support php constants */
        { token: 'support.constant.ext.php', foreground: 'd19a66' },
        /** support php constants */
        { token: 'support.constant.std.php', foreground: 'd19a66' },
        /** support php constants */
        { token: 'support.constant.core.php', foreground: 'd19a66' },
        /** support php constants */
        { token: 'support.constant.parser-token.php', foreground: 'd19a66' },
        /** php goto */
        { token: 'entity.name.goto-label.php', foreground: '61afef' },
        /** php goto */
        { token: 'support.other.php', foreground: '61afef' },
        /** php logical/bitwise operator */
        { token: 'keyword.operator.logical.php', foreground: '56b6c2' },
        /** php logical/bitwise operator */
        { token: 'keyword.operator.bitwise.php', foreground: '56b6c2' },
        /** php logical/bitwise operator */
        { token: 'keyword.operator.arithmetic.php', foreground: '56b6c2' },
        /** php regexp operator */
        { token: 'keyword.operator.regexp.php', foreground: 'c678dd' },
        /** php comparison */
        { token: 'keyword.operator.comparison.php', foreground: '56b6c2' },
        /** php heredoc/nowdoc */
        { token: 'keyword.operator.heredoc.php', foreground: 'c678dd' },
        /** php heredoc/nowdoc */
        { token: 'keyword.operator.nowdoc.php', foreground: 'c678dd' },
        /** python function decorator @ */
        { token: 'meta.function.decorator.python', foreground: '61afef' },
        /** python function support */
        { token: 'support.token.decorator.python', foreground: '56b6c2' },
        /** python function support */
        { token: 'meta.function.decorator.identifier.python', foreground: '56b6c2' },
        /** parameter function */
        { token: 'function.parameter', foreground: 'd19a66' },
        /** parameter function js/ts */
        { token: 'function.parameter', foreground: 'abb2bf' },
        /** brace function */
        { token: 'function.brace', foreground: 'abb2bf' },
        /** parameter function ruby cs */
        { token: 'function.parameter.ruby', foreground: 'abb2bf' },
        /** parameter function ruby cs */
        { token: ' function.parameter.cs', foreground: 'abb2bf' },
        /** constant.language.symbol.ruby */
        { token: 'constant.language.symbol.ruby', foreground: '56b6c2' },
        /** rgb-value */
        { token: 'rgb-value', foreground: '56b6c2' },
        /** rgb value */
        { token: 'inline-color-decoration rgb-value', foreground: 'd19a66' },
        /** rgb value less */
        { token: 'less rgb-value', foreground: 'd19a66' },
        /** sass selector */
        { token: 'selector.sass', foreground: 'e06c75' },
        /** ts primitive/builtin types */
        { token: 'support.type.primitive.ts', foreground: 'e5c07b' },
        /** ts primitive/builtin types */
        { token: 'support.type.builtin.ts', foreground: 'e5c07b' },
        /** ts primitive/builtin types */
        { token: 'support.type.primitive.tsx', foreground: 'e5c07b' },
        /** ts primitive/builtin types */
        { token: 'support.type.builtin.tsx', foreground: 'e5c07b' },
        /** block scope */
        { token: 'block.scope.end', foreground: 'abb2bf' },
        /** block scope */
        { token: 'block.scope.begin', foreground: 'abb2bf' },
        /** cs storage type */
        { token: 'storage.type.cs', foreground: 'e5c07b' },
        /** cs local variable */
        { token: 'entity.name.variable.local.cs', foreground: 'e06c75' },
        { token: 'token.info-token', foreground: '61afef' },
        { token: 'token.warn-token', foreground: 'd19a66' },
        { token: 'token.error-token', foreground: 'f44747' },
        { token: 'token.debug-token', foreground: 'c678dd' },
        /** String interpolation */
        { token: 'punctuation.definition.template-expression.begin', foreground: 'c678dd' },
        /** String interpolation */
        { token: 'punctuation.definition.template-expression.end', foreground: 'c678dd' },
        /** String interpolation */
        { token: 'punctuation.section.embedded', foreground: 'c678dd' },
        /** Reset JavaScript string interpolation expression */
        { token: 'meta.template.expression', foreground: 'abb2bf' },
        /** Import module JS */
        { token: 'keyword.operator.module', foreground: 'c678dd' },
        /** js Flowtype */
        { token: 'support.type.type.flowtype', foreground: '61afef' },
        /** js Flow */
        { token: 'support.type.primitive', foreground: 'e5c07b' },
        /** js class prop */
        { token: 'meta.property.object', foreground: 'e06c75' },
        /** js func parameter */
        { token: 'variable.parameter.function.js', foreground: 'e06c75' },
        /** js template literals begin */
        { token: 'keyword.other.template.begin', foreground: '98c379' },
        /** js template literals end */
        { token: 'keyword.other.template.end', foreground: '98c379' },
        /** js template literals variable braces begin */
        { token: 'keyword.other.substitution.begin', foreground: '98c379' },
        /** js template literals variable braces end */
        { token: 'keyword.other.substitution.end', foreground: '98c379' },
        /** js operator.assignment */
        { token: 'keyword.operator.assignment', foreground: '56b6c2' },
        /** go operator */
        { token: 'keyword.operator.assignment.go', foreground: 'e5c07b' },
        /** go operator */
        { token: 'keyword.operator.address.go', foreground: 'e5c07b' },
        /** Go package name */
        { token: 'entity.name.package.go', foreground: 'e5c07b' },
        /** elm prelude */
        { token: 'support.type.prelude.elm', foreground: '56b6c2' },
        /** elm constant */
        { token: 'support.constant.elm', foreground: 'd19a66' },
        /** template literal */
        { token: 'punctuation.quasi.element', foreground: 'c678dd' },
        /** html/pug (jade) escaped characters and entities */
        { token: 'constant.character.entity', foreground: 'e06c75' },
        /** styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour */
        { token: 'entity.other.attribute-name.pseudo-element', foreground: '56b6c2' },
        /** styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour */
        { token: 'entity.other.attribute-name.pseudo-class', foreground: '56b6c2' },
        /** Clojure globals */
        { token: 'entity.global.clojure', foreground: 'e5c07b' },
        /** Clojure symbols */
        { token: 'meta.symbol.clojure', foreground: 'e06c75' },
        /** Clojure constants */
        { token: 'constant.keyword.clojure', foreground: '56b6c2' },
        /** CoffeeScript Function Argument */
        { token: 'meta.arguments.coffee', foreground: 'e06c75' },
        /** CoffeeScript Function Argument */
        { token: 'variable.parameter.function.coffee', foreground: 'e06c75' },
        /** Ini Default Text */
        { token: 'source.ini', foreground: '98c379' },
        /** Makefile prerequisities */
        { token: 'meta.scope.prerequisites.makefile', foreground: 'e06c75' },
        /** Makefile text colour */
        { token: 'source.makefile', foreground: 'e5c07b' },
        /** Groovy import names */
        { token: 'storage.modifier.import.groovy', foreground: 'e5c07b' },
        /** Groovy Methods */
        { token: 'meta.method.groovy', foreground: '61afef' },
        /** Groovy Variables */
        { token: 'meta.definition.variable.name.groovy', foreground: 'e06c75' },
        /** Groovy Inheritance */
        { token: 'meta.definition.class.inherited.classes.groovy', foreground: '98c379' },
        /** HLSL Semantic */
        { token: 'support.variable.semantic.hlsl', foreground: 'e5c07b' },
        /** HLSL Types */
        { token: 'support.type.texture.hlsl', foreground: 'c678dd' },
        /** HLSL Types */
        { token: 'support.type.sampler.hlsl', foreground: 'c678dd' },
        /** HLSL Types */
        { token: 'support.type.object.hlsl', foreground: 'c678dd' },
        /** HLSL Types */
        { token: 'support.type.object.rw.hlsl', foreground: 'c678dd' },
        /** HLSL Types */
        { token: 'support.type.fx.hlsl', foreground: 'c678dd' },
        /** HLSL Types */
        { token: 'support.type.object.hlsl', foreground: 'c678dd' },
        /** SQL Variables */
        { token: 'text.variable', foreground: 'e06c75' },
        /** SQL Variables */
        { token: 'text.bracketed', foreground: 'e06c75' },
        /** types */
        { token: 'support.type.swift', foreground: 'e5c07b' },
        /** types */
        { token: 'support.type.vb.asp', foreground: 'e5c07b' },
        /** heading 1, keyword */
        { token: 'entity.name.function.xi', foreground: 'e5c07b' },
        /** heading 2, callable */
        { token: 'entity.name.class.xi', foreground: '56b6c2' },
        /** heading 3, property */
        { token: 'constant.character.character-class.regexp.xi', foreground: 'e06c75' },
        /** heading 4, type, class, interface */
        { token: 'constant.regexp.xi', foreground: 'c678dd' },
        /** heading 5, enums, preprocessor, constant, decorator */
        { token: 'keyword.control.xi', foreground: '56b6c2' },
        /** heading 6, number */
        { token: 'invalid.xi', foreground: 'abb2bf' },
        /** string */
        { token: 'beginning.punctuation.definition.quote.markdown.xi', foreground: '98c379' },
        /** comments */
        { token: 'beginning.punctuation.definition.list.markdown.xi', foreground: '7f848e' },
        /** link */
        { token: 'constant.character.xi', foreground: '61afef' },
        /** accent */
        { token: 'accent.xi', foreground: '61afef' },
        /** wikiword */
        { token: 'wikiword.xi', foreground: 'd19a66' },
        /** language operators like '+', '-' etc */
        { token: 'constant.other.color.rgb-value.xi', foreground: 'ffffff' },
        /** elements to dim */
        { token: 'punctuation.definition.tag.xi', foreground: '5c6370' },

    ];
    colors = {
        'activityBar.background': '#282c34',
        'activityBar.foreground': '#d7dae0',
        'activityBarBadge.background': '#4d78cc',
        'activityBarBadge.foreground': '#f8fafd',
        'badge.background': '#282c34',
        'button.background': '#404754',
        'debugToolBar.background': '#21252b',
        'diffEditor.insertedTextBackground': '#00809b33',
        'dropdown.background': '#21252b',
        'dropdown.border': '#21252b',
        'editor.background': '#282c34',
        'editor.foreground': '#abb2bf',
        'editorError.foreground': '#c24038',
        'editorIndentGuide.activeBackground': '#c8c8c859',
        'editorMarkerNavigation.background': '#21252b',
        'editorRuler.foreground': '#abb2bf26',
        'editor.lineHighlightBackground': '#2c313c',
        'editor.selectionBackground': '#67769660',
        'editor.selectionHighlightBackground': '#ffffff10',
        'editor.selectionHighlightBorder': '#ddd',
        'editorCursor.background': '#ffffffc9',
        'editorCursor.foreground': '#528bff',
        'editorBracketMatch.border': '#515a6b',
        'editorBracketMatch.background': '#515a6b',
        'editor.findMatchBackground': '#42557b',
        'editor.findMatchBorder': '#457dff',
        'editor.findMatchHighlightBackground': '#314365',
        'editor.wordHighlightBackground': '#484e5b',
        'editor.wordHighlightBorder': '#7f848e',
        'editor.wordHighlightStrongBackground': '#abb2bf26',
        'editor.wordHighlightStrongBorder': '#7f848e',
        'editorGroup.background': '#181a1f',
        'editorGroup.border': '#181a1f',
        'editorGroupHeader.tabsBackground': '#21252b',
        'editorIndentGuide.background': '#3b4048',
        'editorLineNumber.foreground': '#495162',
        'editorActiveLineNumber.foreground': '#737984',
        'editorWhitespace.foreground': '#3b4048',
        'editorHoverWidget.background': '#21252b',
        'editorHoverWidget.border': '#181a1f',
        'editorSuggestWidget.background': '#21252b',
        'editorSuggestWidget.border': '#181a1f',
        'editorSuggestWidget.selectedBackground': '#2c313a',
        'editorWidget.background': '#21252b',
        'focusBorder': '#464646',
        'input.background': '#1d1f23',
        'list.activeSelectionBackground': '#2c313a',
        'list.activeSelectionForeground': '#d7dae0',
        'list.focusBackground': '#383e4a',
        'list.hoverBackground': '#292d35',
        'list.highlightForeground': '#c5c5c5',
        'list.inactiveSelectionBackground': '#2c313a',
        'list.inactiveSelectionForeground': '#d7dae0',
        'menu.foreground': '#c8c8c8',
        'peekViewEditor.background': '#1b1d23',
        'peekViewEditor.matchHighlightBackground': '#29244b',
        'peekViewResult.background': '#22262b',
        'scrollbarSlider.background': '#4e566660',
        'scrollbarSlider.activeBackground': '#747d9180',
        'scrollbarSlider.hoverBackground': '#5a637580',
        'sideBar.background': '#21252b',
        'sideBarSectionHeader.background': '#282c34',
        'statusBar.background': '#21252b',
        'statusBar.foreground': '#9da5b4',
        'statusBarItem.hoverBackground': '#2c313a',
        'statusBar.noFolderBackground': '#21252b',
        'statusBar.debuggingBackground': '#7e0097',
        'statusBar.debuggingBorder': '#66017a',
        'statusBar.debuggingForeground': '#ffffff',
        'statusBarItem.remoteForeground': '#f8fafd',
        'statusBarItem.remoteBackground': '#4d78cc',
        'tab.activeBackground': '#282c34',
        'tab.activeForeground': '#dcdcdc',
        'tab.border': '#181a1f',
        'tab.inactiveBackground': '#21252b',
        'tab.hoverBackground': '#323842',
        'tab.unfocusedHoverBackground': '#323842',
        'terminal.foreground': '#c8c8c8',
        'terminal.ansiBlack': '#2d3139',
        'terminal.ansiBlue': '#61afef',
        'terminal.ansiGreen': '#98c379',
        'terminal.ansiYellow': '#e5c07b',
        'terminal.ansiCyan': '#56b6c2',
        'terminal.ansiMagenta': '#c678dd',
        'terminal.ansiRed': '#e06c75',
        'terminal.ansiWhite': '#d7dae0',
        'terminal.ansiBrightBlack': '#7f848e',
        'terminal.ansiBrightBlue': '#528bff',
        'terminal.ansiBrightGreen': '#98c379',
        'terminal.ansiBrightYellow': '#e5c07b',
        'terminal.ansiBrightCyan': '#56b6c2',
        'terminal.ansiBrightMagenta': '#7e0097',
        'terminal.ansiBrightRed': '#f44747',
        'terminal.ansiBrightWhite': '#d7dae0',
        'titleBar.activeBackground': '#282c34',
        'titleBar.activeForeground': '#9da5b4',
        'titleBar.inactiveBackground': '#21252b',
        'titleBar.inactiveForeground': '#6b717d',
        'textLink.foreground': '#61afef',
    };
}

