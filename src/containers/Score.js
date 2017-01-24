/* Score calculator voor 1 Player. Player geeft aan welke stenen hij op zijn
plank/tafel heeft liggen, welke plaatjes hij heeft gepakt, en vinkt aan welke
verdubbelaars van toepassing zijn */
import React, { Component, PropTypes } from 'react'
import Header from '../components/score/Header'
import Input from '../components/score/Input'
import MahJongg from '../components/score/MahJongg'
import TotalScore from '../components/score/TotalScore'

class Score extends Component {

  render() {
    return (
      <div className="score">
        <h1>MahJongg Score</h1>
      <Header />
      <Input />
      <MahJongg />
      <TotalScore />

      </div>
    );
  }

}
export default Score;
