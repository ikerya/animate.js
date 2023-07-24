export default function interpolatePropValue(prop, value) {
    switch (prop) {
        case 'opacity':
        case 'scale':
        case 'scale3d':
            return value.toFixed(3);
        default:
            return Math.floor(value);
    }
}