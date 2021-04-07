import timings from '../timings';

function inherit(instance) {
    const instanceTimings = {};

    Object.keys(timings).map((key) => instanceTimings[key] = timings[key]);

    instance.__proto__.timings = instanceTimings;
    instance.prototype.timings = instanceTimings;
}

export default {
    inherit
}