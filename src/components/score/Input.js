// Player geeft input; welke stenen heeft hij op tafel/plank
import React, { PropTypes } from 'react';

const Input = props => {
  return (
    <div className="score-inputs">
      <div className="concealed">
        <h1>Fill in your concealed tiles</h1>
      </div>
      <div className="exposed">
        <h1>Fill in your exposed tiles</h1>
      </div>
      <div className="images">
        <h1>Fill in Season or Flower tiles</h1>
      </div>
    </div>
  )
};

export default Input;
