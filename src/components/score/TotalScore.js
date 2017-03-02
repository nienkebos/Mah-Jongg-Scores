/* Totaal aantal punten berekend */
import React, { PropTypes } from 'react';

const TotalScore = props => {
  const totalScore = parseInt(props.score.concealed) + parseInt(props.score.exposed) + parseInt(props.score.images);
  return (
    <div className="totalscore">
      <button>Calculate</button>
      <h1>Your total score is: {totalScore} </h1>
    </div>
  )
}

export default TotalScore;
