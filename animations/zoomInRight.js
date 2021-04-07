import easeInQuart from '../timings/easeInQuart';

export default function zoomInRight() {
    return { 
        timing: easeInQuart,
        keyframes: [{
            scale3d: [ '0.1,0.1,0.1' ],
            translate3d: [ '1000,0,0' ],
            opacity: [ 0 ]
        }, {
            duration: 1000,
            scale3d: [ '0.1,0.1,0.1', '1,1,1' ],
            translate3d: [ '1000,0,0', '0,0,0' ],
            opacity: [ 0, 1 ]
        }]
    };
}