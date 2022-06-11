export default function interpolatePropValue(prop, value) {
    switch (prop) {
        case 'opacity':
        case 'scale':
            return value.toFixed(3);
        default:
            return Math.floor(value);
    }
}