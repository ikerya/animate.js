import easeOutQuad from '../timings/easeOutQuad';

export default function bounceInLeft() {
    return { 
        timing: easeOutQuad, 
        keyframes: [ {
            duration: 400,
            opacity: [ 0 ],
            translateX: [ -1000 ],
            translateY: [ 0 ],
            translateZ: [ 0 ],
            scaleX: [ 3 ]
        }, {
            duration: 150,
            opacity: [ 0, 1 ],
            translateX: [ -1000, 40 ],
            scaleX: [ 3, 1 ]
        }, {
            duration: 150,
            translateX: [ 40, -30 ],
            scaleX: [ 1, 0.98 ]
        }, {
            duration: 150,
            translateX: [ -30, 15 ]
        }, {
            duration: 150,
            translateX: [ 15, 0 ]
        }] 
    };
}