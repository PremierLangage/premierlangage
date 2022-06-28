
export interface Automaton {
    states: string[];
    alphabet: string[];
    initialStates: string[];
    transitions: Transition[];
    acceptingStates: string[];
    position?: { [k: string]: Position };
}

export interface Transition {
    symbols: string[];
    toState:  string;
    fromState: string;
}

export interface Position {
    x: number;
    y: number;
}

export function emptyAutomaton(): Automaton {
    return {
        alphabet: [],
        initialStates: [],
        acceptingStates: [],
        states: [],
        transitions: [],
        position: {},
    };
}

export function stringFromAutomaton(automaton: Automaton) {
    const lines = [];
    lines.push('#states');
    automaton.states.forEach(e => lines.push(e));

    lines.push('#initials');
    automaton.initialStates.forEach(e => lines.push(e));

    lines.push('#accepting');
    automaton.acceptingStates.forEach(e => lines.push(e));

    lines.push('#alphabet');
    automaton.alphabet.forEach(e => lines.push(e));

    lines.push('#transitions');

    automaton.transitions.forEach(transition => {
        transition.symbols.forEach(symbol => {
            lines.push(`${transition.fromState}:${symbol}>${transition.toState}`);
        });
    });

    return lines.join('\n');
}

export function automatonFromString(input: string) {
    const lines = input.split(/\r?\n/);
    const automaton = emptyAutomaton();
    let states: string[] = [];
    let initials: string[] = [];
    let accepting: string[] = [];
    let alphabet: string[] = [];
    const transitions: Transition[] = [];

    let parseState = null;

    const parseCounts = {
      states : 0,
      initials : 0,
      accepting : 0,
      alphabet : 0,
      transitions : 0
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].replace(/\s/g, '');
        if (line.length === 0) {
            continue;
        } else if (line[0] === '#') {
            parseState = line.substr(1);

            if (typeof parseCounts[parseState] === 'undefined') {
                throw new Error('Line ' + (i + 1).toString() + ': invalid section name ' +
                                parseState + '. Must be one of: states, initials, \
                                accepting, alphabet, transitions.');
            } else {
                parseCounts[parseState] += 1;
                if (parseCounts[parseState] > 1) {
                    throw new Error(`Line ${(i + 1)}: duplicate section name ${parseState}.`);
                }
            }
        } else {
            if (parseState == null) {
                throw new Error('Line ' + (i + 1).toString() + ': no #section declared. \
                                Add one section: states, initial, accepting, \
                                alphabet, transitions.');
            } else if (parseState === 'states') {
                states = states.concat(line.split(';'));
            } else if (parseState === 'initials') {
                initials = initials.concat(line.split(';'));
            } else if (parseState === 'accepting') {
                accepting = accepting.concat(line.split(';'));
            } else if (parseState === 'alphabet') {
                alphabet = alphabet.concat(line.split(';'));
            } else if (parseState === 'transitions') {
                const state_rest = line.split(':');
                const fromStates = state_rest[0].split(',');
                const parts = state_rest[1].split(';');

                let symbols: string[] = [];
                let toStates: string[] = [];
                for (let j = 0; j < parts.length; j++) {
                    const left_right = parts[j].split('>');
                    symbols = left_right[0].split(',');
                    toStates = left_right[1].split(',');
                }

                transitions.push({
                    fromState: fromStates[0],
                    toState: toStates[0],
                    symbols: symbols
                });
            }
      }
    }

    for (const k in parseCounts) {
        if (parseCounts[k] !== 1) {
            throw new Error('Specification missing #' + parseCounts[k] +
            ' section.');
        }
    }

    automaton.states = states;
    automaton.initialStates = initials;
    automaton.alphabet = alphabet;
    automaton.acceptingStates = accepting;
    automaton.transitions = transitions;

    return automaton;
}

export function automatonToDotFormat(automaton: Automaton) {
    const result = ['digraph finite_state_machine {', '  rankdir=LR;'];
    const accStates = ['  node [shape = doublecircle];'];

    let i = 0, trans = [];

    for (i = 0; i < automaton.acceptingStates.length; i++) {
        accStates.push(automaton.acceptingStates[i].toString());
    }

    accStates.push(';');
    if (accStates.length > 2) {
      result.push(accStates.join(' '));
    }
    result.push('  node [shape = circle];');
    i = 0;
    automaton.initialStates.forEach(state => {
        result.push(`  secret_node${i} [style=invis, shape=point]`);

        const arrow = [`  secret_node${i} ->`];
        arrow.push(state);
        arrow.push('[style=bold];');
        result.push(arrow.join(' '));
        i++;
    });

    automaton.transitions.forEach(transition => {
        let initTransition = false;
        automaton.initialStates.forEach(init => {
            if (init === transition.toState) {
                trans = [' '];
                trans.push(transition.toState);
                trans.push('->');
                trans.push(transition.fromState);
                trans.push('[');
                trans.push('label =');
                trans.push('"' + transition.symbols.join(',') + '"');
                trans.push(' dir = back];');
                result.push(trans.join(' '));
                initTransition = true;
                return true;
            }
        });
        if (!initTransition) {
            trans = [' '];
            trans.push(transition.fromState.toString());
            trans.push('->');
            trans.push(transition.toState.toString());
            trans.push('[');
            trans.push('label =');
            trans.push('"' + transition.symbols.join(',') + '"');
            trans.push(' ];');
            result.push(trans.join(' '));
        }
    });

    result.push('}');

    return result.join('\n').replace(/\$/g, '$');
}
