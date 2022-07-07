import React from 'react';
import PropTypes from 'prop-types';
import './screen.style.css';

const Screen = ({ info, tx, opr }) => (
  
    <div className="output">
        {/* <div className="previous">{tx } {opr}</div> */}
        <div className="current">{ info }</div>
    </div>
);

Screen.propTypes = {
    info: PropTypes.string.isRequired,
  };

export default Screen;