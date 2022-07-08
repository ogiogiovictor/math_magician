import React from 'react';
import PropTypes  from 'prop-types';

import './button.style.css';

const Button = ({text, type, act }) => {
    
    const performAction = (opr) => act(opr);

    return (
    <button onClick={() => performAction(text)}  onKeyUp={() => performAction(text)} className={`btn btn-${type}`} type="button">{text}</button>
    );
}

Button.PropTypes = {
    text: PropTypes.string.isRequired,
    // type: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    type: PropTypes.string.isRequired,
    act: PropTypes.func.isRequired,
}

export default Button;