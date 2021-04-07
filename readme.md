# Animate.JS

This package aims to replace [Animate.CSS] using JS step-by-step (**requestAnimationFrame**) animations instead of CSS ones (**keyframes**).
# Usage

#### Demo
- [Live Demo (first option)]
- [Live Demo (second option)]

#### First option

```js
// fadeOut

const start = new AnimateJS(
    document.getElementById('block'),
    {
        keyframes: [{
            opacity: [ 1 ]
        }, {
            duration: 1000,
            opacity: [ 1, 0 ]
        }]
    }
);

start().then(() => console.log("ended"));
```

#### Second option

```js
// fadeOut

const options = {
    duration: 500
};
const start = AnimateJS.use(
    'fadeOut',
    document.getElementById('block'),
    options // optional
);

start().then(() => console.log("ended"));
```

[Animate.CSS]: <https://animate.style>
[Live Demo (first option)]: <https://62jtk.csb.app/>
[Live Demo (second option)]: <https://clz44.csb.app/>