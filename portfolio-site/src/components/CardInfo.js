import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo(props) {
    const style = useSpring({opacity: 1, from: {opacity: 0}});
    return (
        <animated.div style={props}>I will fade in</animated.div>
    );
}
export default infoCard;