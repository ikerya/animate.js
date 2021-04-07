import easeOutSine from '../timings/easeOutSine';

export default function zoomIn() {
    return { 
        timing: easeOutSine,
        keyframes: [{
            duration: 500,
            scale3d: [ '0.3,0.3,0.3' ],
            opacity: [ 0 ]
        }, {
            duration: 500,
            scale3d: [ '0.3,0.3,0.3', '1,1,1' ],
            opacity: [ 0, 1 ]
        }]
    };
}