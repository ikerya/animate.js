import easeInQuart from '../timings/easeOutQuart';

export default function zoomOutRight() {
    return { 
        timing: easeInQuart,
        keyframes: [{
            translate3d: [ '0,0,0' ],
            opacity: [ 1 ],
            scale3d: [ '1,1,1' ]
        }, {
            duration: 400,
            translate3d: [ '0,0,0', '42,0,0' ],
            scale3d: [ '1,1,1', '0.475,0.475,0.475' ]
        }, {
            duration: 600,
            translate3d: [ '0,0,0', '1000,0,0' ],
            opacity: [ 1, 0 ],
            scale3d: [ '0.475,0.475,0.475', '0.1,0.1,0.1' ],
        }]
    };
}