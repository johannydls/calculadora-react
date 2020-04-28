import React from 'react';

import './Button.css';

export default props => {
  let classes = 'button ';
  classes += props.customStyle ? props.customStyle : '';
  
  return (
    <button className={ classes } onClick={() => props.click(props.label)}>{ props.label }</button>
  );
}