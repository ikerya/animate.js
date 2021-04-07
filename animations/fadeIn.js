export default function fadeIn() {
    return { 
        keyframes: [ {
            opacity: [ 0 ]
        }, {
            duration: 1000,
            opacity: [ 0, 1 ]
        }] 
    };
}