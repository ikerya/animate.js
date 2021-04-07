import easeInCubic from '../timings/easeInCubic';

export default function flipInX() {
    return { 
        timing: easeInCubic, 
        keyframes: [{
            perspective: [ 400 ],
            rotateX: [ 90 ],
            opacity: [ 0 ]
        }, {
            duration: 500,
            rotateX: [ 90, -20 ],
            opacity: [ 0, 0.8 ]
        }, {
            duration: 300,
            rotateX: [ -20, 10 ],
            opacity: [ 0.8, 1 ]
        }, {
            duration: 300,
            rotateX: [ 10, 0 ]
        }] 
    };
}