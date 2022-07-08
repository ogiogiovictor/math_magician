import React from 'react';
import PropTypes from 'prop-types';
import './screen.style.css';

const Screen = ({ info }) => (
 
    <div className="output">
        <div className="current">{ info }</div>
    </div>
);

Screen.propTypes = {
    info: PropTypes.string.isRequired,
  };

export default Screen;