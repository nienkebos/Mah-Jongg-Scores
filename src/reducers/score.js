import * as ScoreActionTypes from '../actiontypes/score'

const initialState = {
  score: {
    concealed: 0,
    exposed: 0,
    images: 0
  },
  mahJongg: false,
  lastStone: 0
}


export default function Score(state=initialState, action){
	switch(action.type) {
    case ScoreActionTypes.ADD_SCORE:
      return {
        mahJongg: state.mahJongg,
        lastStone: state.lastStone,
        score: action.score
      }

    case ScoreActionTypes.ADD_MAHJONGG:
      return {
        score: state.score,
        mahJongg: action.mahJongg,
        lastStone: action.lastStone
      }

    default:
      return state;
  }
}
