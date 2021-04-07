import animations from '../animations';

function inherit(instance) {
    const instanceAnimations = {};

    Object.keys(animations).map((key) => instanceAnimations[key] = animations[key]);

    instance.__proto__.animations = instanceAnimations;
    instance.prototype.animations = instanceAnimations;
}

export default {
    inherit
}