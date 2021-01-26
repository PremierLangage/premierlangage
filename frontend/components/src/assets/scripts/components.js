class ComponentFramework {

    static createElement(component) {
        const selectors = {
            "AutomatonEditor": "c-automaton-editor",
            "AutomatonDrawer": "c-automaton-drawer", // TODO deprecated
            "AutomatonViewer": "c-automaton-viewer",
            "CheckboxGroup": "c-checkbox-group",
            "CodeEditor": "c-code-editor",
            "Countdown": "c-countdown",
            "DragDrop": "c-drag-drop",
            "GraphDrawer": "c-graph-drawer",   // TODO deprecated
            "GraphViewer": "c-graph-viewer",
            "Input": "c-input",
            "Hint": "c-hint",
            "JSXGraph": "c-jsxgraph",
            "KekuleEditor": "c-kekule-editor",
            "KekuleViewer": "c-kekule-viewer",
            "MatchList": "c-match-list",
            "MathDrawer": "c-math-drawer", // TODO deprecated
            "MathInput": "c-math-input",
            "MathMatrix": "c-math-matrix",
            "RadioGroup": "c-radio-group",
            "SortList": "c-sort-list",
            "Text": "c-text", // TODO deprecated
            "TextSelect": "c-text-select",
        };

        const O = document.querySelector(`[cid="${component.cid}"]`);
        const S = component.selector || selectors[component.controller];
        const N = document.createElement(S);
        N.setAttribute('cid', component.cid);
        O.replaceWith(N);
        N.deserialize(component);
    }

    static findAnswers(result) {
        document.querySelectorAll('[cid]').forEach(node => {
            result[node.getAttribute('cid')] = node.serialize() || {};
        });
        return result;
    }

}
