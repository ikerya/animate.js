import easeOutCubic from '../timings/easeOutCubic';

export default function backInLeft() {
    return { 
        timing: easeOutCubic, 
        keyframes: [ {
            translateX: [ -2000 ],
            opacity: [ 0 ],
            scale: [ 0.7 ]
        }, {
            duration: 800,
            translateX: [ -2000, 0 ],
            opacity: [ 0, 0.8 ],
        }, {
            duration: 200,
            scale: [ 0.7, 1 ],
            opacity: [ 0.8, 1 ]
        }] 
    };
}