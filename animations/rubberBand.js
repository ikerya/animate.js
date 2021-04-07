export default function rubberBand() {
    return { 
        keyframes: [{
            scale3d: [ '1,1,1' ]
        }, {
            duration: 300,
            scale3d: [ '1,1,1', '1.25,0.75,1' ]
        }, {
            duration: 100,
            scale3d: [ '1.25,0.75,1', '0.75,1.25,1' ]
        }, {
            duration: 100,
            scale3d: [ '0.75,1.25,1', '1.15,0.85,1' ]
        }, {
            duration: 150,
            scale3d: [ '1.15,0.85,1', '0.95,1.05,1' ]
        }, {
            duration: 150,
            scale3d: [ '0.95,1.05,1', '1.05,0.95,1' ]
        }, {
            duration: 200,
            scale3d: [ '1.05,0.95,1', '1,1,1' ]
        }] 
    };
}