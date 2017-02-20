/* Extra punten en verdubbelaars wanneer Mah Jongg */
import React, { PropTypes } from 'react';

const MahJongg = props => {
  return (
    <form className="mahjongg">
      <label>Mah Jongg: <input type="checkbox"/></label>
      <label>
        Winnende steen: 
        <select>
          <option>door kong-roof </option>
          <option>van de muur </option>
          <option>van dode muur </option>
          <option>laatste van levende muur </option>
        </select>
      </label>
    </form>
  )
}

export default MahJongg;
