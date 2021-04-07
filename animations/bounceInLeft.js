import easeOutQuad from '../timings/easeOutQuad';

export default function bounceInLeft() {
    return { 
        timing: easeOutQuad, 
        keyframes: [ {
            duration: 599,
            opacity: [ 0 ],
            translateX: [ -2000 ],
            translateY: [ 0 ],
            translateZ: [ 0 ],
            scaleX: [ 3 ]
        }, {
            duration: 150,
            opacity: [ 0, 1 ],
            translateX: [ -2000, 15 ],
            scaleX: [ 3, 1 ]
        }, {
            duration: 150,
            translateX: [ 15, -7 ],
            scaleX: [ 1, 0.98 ]
        }, {
            duration: 100,
            translateX: [ -7, 3.5 ]
        }, {
            duration: 1,
            translateX: [ 3.5, 0 ]
        }] 
    };
}