import easeOutQuad from '../timings/easeOutQuad';

export default function bounceOutRight() {
    return { 
        timing: easeOutQuad, 
        keyframes: [ {
            opacity: [ 1 ],
            translate3d: [ '0,0,0' ],
            scaleX: [ .9 ]
        }, {
            duration: 210,
            translate3d: [ '0,0,0', '-40,0,0' ]
        }, {
            duration: 210,
            translate3d: [ '-40,0,0', '30,0,0' ]
        }, {
            duration: 180,
            translate3d: [ '30,0,0', '-15,0,0' ]
        }, {
            duration: 400,
            opacity: [ 1, 0 ],
            scaleX: [ 0.9, 2 ],
            translate3d: [ '-15,0,0', '2000,0,0', 'inc' ],
        }] 
    };
}