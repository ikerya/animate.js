export default function pulse() {
    return { 
        keyframes: [ {
            scale: [ 1 ]
        }, {
            duration: 500,
            scale: [ 1, 1.05 ]
        }, {
            duration: 500,
            scale: [ 1.05, 1 ]
        }] 
    };
}