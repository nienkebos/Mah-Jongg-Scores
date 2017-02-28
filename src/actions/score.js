import * as ScoreActionTypes from '../actiontypes/score';

export const addScore = (score) => {
  return {
    type: ScoreActionTypes.ADD_SCORE,
    score
  }
}

export const addMahJongg = (mahJongg, lastStone) => {
  return {
    type: ScoreActionTypes.ADD_MAHJONGG,
    mahJongg,
    lastStone
  }
}
