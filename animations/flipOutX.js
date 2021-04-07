import easeInCubic from '../timings/easeInCubic';

export default function flipOutX() {
    return { 
        timing: easeInCubic, 
        keyframes: [{
            duration: 400,
            perspective: [ 400 ],
            rotateX: [ 0 ],
            opacity: [ 0 ]
        }, {
            duration: 300,
            rotateX: [ 0, -20 ],
            opacity: [ 0, 1 ]
        }, {
            duration: 150,
            rotateX: [ -20, 45 ],
            opacity: [ 1, 0.8 ]
        }, {
            duration: 150,
            rotateX: [ 45, 90 ],
            opacity: [ 0.8, 1 ]
        }] 
    };
}