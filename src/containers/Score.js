/* Score calculator voor 1 Player. Player geeft aan welke stenen hij op zijn
plank/tafel heeft liggen, welke plaatjes hij heeft gepakt, en vinkt aan welke
verdubbelaars van toepassing zijn */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ScoreActionCreators from '../actions/score';



import Header from '../components/score/Header'
import Input from '../components/score/Input'
import MahJongg from '../components/score/MahJongg'
import TotalScore from '../components/score/TotalScore'

class Score extends Component {

  // static propTypes = {
  //   scores: PropTypes.object.isRequired,
  // };

  render() {
    const { dispatch, score, mahJongg, lastStone } = this.props
    const addScore = bindActionCreators(ScoreActionCreators.addScore, dispatch);
    const addMahJongg = bindActionCreators(ScoreActionCreators.addMahJongg, dispatch);


    return (
      <div className="score">
        <Header />
        <div className="container">
          <Input
            score={score}
            addScore={addScore}
          />
          <MahJongg
            addMahJongg={addMahJongg}
            mahJongg={mahJongg}
            lastStone={lastStone}
          />
        </div>
        <TotalScore
          score={score}
          mahJongg={mahJongg}
          lastStone={lastStone}
        />
      </div>
    )
  }

}

const mapStateToProps = state => (
  {
    score: state.score,
    mahJongg: state.mahJongg,
    lastStone: state.lastStone
  }
);

export default connect(mapStateToProps)(Score)
