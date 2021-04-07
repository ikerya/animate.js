export default function fadeOut() {
    return { 
        keyframes: [ {
            opacity: [ 1 ]
        }, {
            duration: 1000,
            opacity: [ 1, 0 ]
        }] 
    };
}