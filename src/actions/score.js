import * as ScoreActionTypes from '../actiontypes/score';

export const addScore = (score) => {
  return {
    type: ScoreActionTypes.ADD_SCORE,
    score
  }
}
