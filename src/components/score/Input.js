// Player geeft input; welke stenen heeft hij op tafel/plank
import React, { PropTypes } from 'react';

const Input = props => {
  return (
    <form>

      <div className="concealed">
        <label>
          Fill in your concealed tiles
          <input type="text" name="concealed"/>
        </label>
      </div>

      <div className="exposed">
        <label>
          Fill in your exposed tiles
          <input type="text" name="exposed"/>
        </label>
      </div>

      <div className="images">
        <label>
          Fill in Season or Flower tiles
          <input type="text" name="images"/>
        </label>
      </div>

      <input type="submit" value="Submit"/>


    </form>
  )
};

export default Input;
