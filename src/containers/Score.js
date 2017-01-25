/* Score calculator voor 1 Player. Player geeft aan welke stenen hij op zijn
plank/tafel heeft liggen, welke plaatjes hij heeft gepakt, en vinkt aan welke
verdubbelaars van toepassing zijn */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

import Header from '../components/score/Header'
import Input from '../components/score/Input'
import MahJongg from '../components/score/MahJongg'
import TotalScore from '../components/score/TotalScore'

class Score extends Component {

  // static propTypes = {
  //   scores: PropTypes.object.isRequired,
  // };

  render() {
    const {scores} = this.props;

    return (
      <div className="score">
        <Header />
        <div className="container">
          <Input scores={scores}/>
          <MahJongg />
        </div>
        <TotalScore />
      </div>
    );
  }

}

const mapStateToProps = state => (
  {scores: state.scores}
);

export default connect(mapStateToProps)(Score);
