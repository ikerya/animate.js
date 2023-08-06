export default function getStylePropDimension(prop) {
    switch (prop) {
        case 'translate':
        case 'translate3d':
        case 'translateX':
        case 'translateY':
        case 'translateZ':
        case 'perspective':
        case 'margin-left':
        case 'margin-right':
        case 'margin-top':
        case 'margin-bottom':
        case 'padding-left':
        case 'padding-right':
        case 'padding-top':
        case 'padding-bottom':
        case 'width':
        case 'min-width':
        case 'height':
        case 'min-height':
        case 'top':
        case 'bottom':
        case 'left':
        case 'right':
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