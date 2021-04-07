import getStylePropDimension from './get_style_prop_dimension';

export default function parseTransformEntries(transform) {
    const entryMatches = transform.match(/([a-z0-9]+)\((.*?)\)/ig) || [];
    const entries = entryMatches.reduce((map, entryMatch) => {
        const [ match, prop, args ] = entryMatch.match(/([a-z0-9]+)\((.*?)\)/i);
        const set = buildArgs( prop, args.split(',').map((arg) => arg.trim()) );

        return map.set(prop, set);
    }, new Map());

    function buildArgs(prop, args) {
        const newArgs = args.map((arg) => {
            const dimension = getStylePropDimension(prop);

            if (!dimension) {
                return +arg;
            }

            return `${arg.toString().replace(/[^0-9\.-]/g, '')}${dimension}`;
        });

        return newArgs;
    }

    function stringify() {
        return [ ...entries.entries() ].reduce((list, [ prop, args ]) => {
            list.push(`${prop}(${args.join(',')})`);

            return list;
        }, []).join(' ');
    }

    function addEntry(prop, args = []) {
        entries.set(prop, buildArgs(prop, args))
    }

    return {
        stringify,
        addEntry
    };
}