export default function getStylePropDimension(prop) {
    switch (prop) {
        case 'translate':
        case 'translate3d':
        case 'translateX':
        case 'translateY':
        case 'translateZ':
        case 'perspective':
            return 'px';
        case 'opacity':
            return '';
        case 'rotateX':
        case 'rotateY':
        case 'rotate':
        case 'skewX':
        case 'skewY':
        case 'skew':
            return 'deg';
    }
}