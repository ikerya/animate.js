# Animate.JS

This package aims to replace [Animate.CSS] using JS step-by-step (**requestAnimationFrame**) animations instead of CSS ones (**keyframes**).
# Usage

#### Demo
- [Watch on CodeSandbox]

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
[Watch on CodeSandbox]: <https://62jtk.csb.app/>