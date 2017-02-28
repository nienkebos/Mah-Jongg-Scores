/* Totaal aantal punten berekend */
import React, { PropTypes } from 'react';

const TotalScore = props => {
  let mahJonggScore = 0;

  if(props.mahJongg) {
    mahJonggScore = 20;
  } else {
    mahJonggScore = 0;
  }

  console.log(1,props);

  const totalScore =
    parseInt(props.score.concealed)
    + parseInt(props.score.exposed)
    + parseInt(props.score.images)
    + mahJonggScore
    + parseInt(props.lastStone);

  return (
    <div className="totalscore">
      <button>Calculate</button>
      <h1>Your total score is: {totalScore} </h1>
    </div>
  )
}

export default TotalScore;
