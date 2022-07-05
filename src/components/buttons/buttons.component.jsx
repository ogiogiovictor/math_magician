import React from 'react';
import PropTypes  from 'prop-types';

import './button.style.css';

const Button = ({text, type}) => {
    return (
    <button className={`btn btn-${type}`} type="button">{text}</button>
    );
}

Button.PropTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export default Button;