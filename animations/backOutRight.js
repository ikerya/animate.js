import easeOutCubic from '../timings/easeOutCubic';

export default function backOutRight() {
    return { 
        timing: easeOutCubic, 
        keyframes: [ {
            translateX: [ 0 ],
            opacity: [ 1 ],
            scale: [ 1 ]
        }, {
            duration: 200,
            scale: [ 1, 0.7 ],
            opacity: [ 1, 0.7 ]
        }, {
            duration: 800,
            translateX: [ 0, 2000 ]
        }] 
    };
}