import easeInCubic from '../timings/easeInCubic';

export default function flipOutX() {
    return { 
        timing: easeInCubic, 
        keyframes: [{
            duration: 400,
            perspective: [ 400 ],
            rotateX: [ 0 ]
        }, {
            duration: 300,
            rotateX: [ 0, -20 ],
            opacity: [ 1, 0.65 ]
        }, {
            duration: 150,
            rotateX: [ -20, 45 ],
            opacity: [ 0.65, 0.3 ]
        }, {
            duration: 150,
            rotateX: [ 45, 90 ],
            opacity: [ 0.3, 0 ]
        }] 
    };
}