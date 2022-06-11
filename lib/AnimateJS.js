import parseTransformEntries from '../utils/parse_transform_entries';
import getStylePropDimension from '../utils/get_style_prop_dimension';
import interpolatePropValue from '../utils/interpolate_prop_value';
import timings from '../utils/timings';
import animations from '../utils/animations';
import { delay, transformKeys } from '../utils/data';
import momentum from '../lib/momentum';

const { setInterval, setTimeout, clearInterval } = momentum;

function AnimateJS(el, data) {
    const state = {};
    const resetProps = data.resetProps || [];
    const alongProps = data.alongProps || {};
    const alongPropsKeys = Object.keys(alongProps);
    const rootTiming = data.timing || this.timings.default;
    const keyframesDuration = data.keyframes.reduce((sum, { duration = 0 }) => sum + duration, 0);
    const wholeDuration = data.duration || keyframesDuration;
    const keyframes = data.keyframes.reduce((keyframes, { from, to, duration = delay, timing, ...rest }, index) => {
        const id = index + 1;
        const keyframeTiming = timing || rootTiming;
        const data = {};
        const props = Object.entries({ ...rest, ...alongProps }).map(([ prop, value ]) => {
            const isAlongProps = alongPropsKeys.includes(prop);
            const from = value[0].toString().split(',').map((f) => Number.isNaN(+f) ? f: +f);
            const to = (value[1] || 0).toString().split(',').map((t) => Number.isNaN(+t) ? t: +t);
            const isInitialValue = typeof value[1] === 'undefined';
            const act = new Array(from.length).fill(null).map((_, i) => {
                const currFrom = from[i];
                const currTo = to[i];

                return currFrom > currTo ?
                    'dec':
                    'inc';
            });
            const diff = new Array(from.length).fill(null).map((_, i) => {
                const currFrom = from[i];
                const currTo = to[i];
                const max = Math.max(currTo, currFrom);
                const min = Math.min(currTo, currFrom);
                let difference =  max - min;
                
                if (difference) difference = Math.abs(difference);

                return difference;
            });

            let lastTick;
            let lastValue;

            function onTick(progress) {
                if (isAlongProps) {
                    return lastTick = {
                        prop,
                        value
                    };
                }

                const change = isInitialValue ?
                    new Array(from.length).fill(0):
                    diff.map((d) => d * progress)

                lastValue = act
                    .map((a, i) => {
                        const currFrom = from[i];
                        const currChange = change[i];

                        return a === 'dec' ?
                            currFrom - currChange:
                            currFrom + currChange;
                    });
                
                lastTick = {
                    prop,
                    value: lastValue.map((value) => interpolatePropValue(prop, value))
                };
            }

            if (isInitialValue) {
                onTick(1);
            }

            return {
                prop, 
                value,

                onTick,

                get lastTick() {
                    return lastTick;
                }
            };
        });

        function getPreviousKeyframe() {
            const prevId = id - 1;

            return keyframes.get(prevId) || {};
        }

        function resetPredefinedProps() {
            resetProps.map((prop) => el.style[prop] = '');
        }

        function start(cb) {
            if (resetProps.length > 0) {
                resetPredefinedProps();
            }

            const realDuration = (duration || 0) / keyframesDuration * wholeDuration;
            const steps = Math.round(realDuration / delay) || 1;

            data.steps = steps;
            data.stepsLeft = steps;

            function iterate(progress) {
                props.map(({ onTick }) => onTick(progress));
                mergeTicks();
            }

            const interval = setInterval(() => {
                const progress = Math.min(
                    (data.steps - data.stepsLeft + 1) / data.steps,
                    1
                );

                iterate(
                    keyframeTiming(progress)
                );

                if (--data.stepsLeft === 0) {
                    setTimeout(() => cb && cb(), delay);
                    clearInterval(interval);
                }
            }, delay);
        }

        function mergeTicks() {
            const ticks = data.ticks = props.reduce((ticks, { lastTick }) => {
                const { prop, value } = lastTick;

                if (transformKeys.includes(prop)) {
                    const prev = getPreviousKeyframe();
                    const transform = parseTransformEntries( ticks.transform || prev.transform || '' );
                    
                    transform.addEntry(prop, value);
                    ticks.transform = data.transform = transform.stringify();
                } else {
                    ticks[prop] = value.map((value) => `${value}${getStylePropDimension(prop)}`);;
                }

                return ticks;
            }, {});

            for (const prop in ticks) {
                el.style[prop] = ticks[prop];
            }

            return ticks;
        }

        return keyframes.set(id, {
            start,

            get props() {
                return props;
            },

            get ticks() {
                return data.ticks;
            },

            get transform() {
                return data.transform;
            },
        });
    }, new Map());

    function getCurrentKeyframe() {
        return keyframes.get(state.keyframe);
    }

    function clear() {
        const keys = [...keyframes.entries() ].map(([ key, value ]) => {
            const props = [];
            let clearTransform = false;

            value.props.some(({ prop }) => {
                if (!transformKeys.includes(prop)) {
                    return props.push(prop)
                }

                if (!clearTransform) {
                    clearTransform = true;
                    props.push('transform');
                }
            });

            return props;
        }).flat();
        const set = new Set(keys);
        const unique = [ ...set.values() ];

        unique.map((key) => el.style[key] = '');
    }

    function startNextKeyframe(cb) {
        const keyframe = getCurrentKeyframe();

        if (!keyframe) {
            return cb && cb(clear);
        }

        keyframe.start(() => {
            state.keyframe++
            startNextKeyframe(cb);
        });
    }

    function begin() {
        return new Promise((resolve) => {
            if (state.started) {
                throw new Error('Animate already started.');
            }
    
            state.started = true;
            state.keyframe = 1;
    
            startNextKeyframe(resolve);
        });
    }

    if (data.initialProps) {
        Object.entries(data.initialProps).map(([ prop, value ]) => el.style[prop] = value);
    }

    return begin;
}

timings.inherit(AnimateJS);
animations.inherit(AnimateJS);

AnimateJS.__proto__.use = function use(animation, el, data) {
    const fn = this.animations[animation];

    if (!fn) {
        throw new Error(`Animation «${animation}» not found. Please, create an issue on our Github for this animation: https://github.com/ikerya/animate.js`);
    }

    return new AnimateJS(el, {
        ...fn(),
        ...data
    });
}

export default AnimateJS;