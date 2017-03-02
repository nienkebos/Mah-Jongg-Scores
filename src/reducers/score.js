import * as ScoreActionTypes from '../actiontypes/score'

const initialState = {
  score: {
    concealed: [],
    exposed: [],
    images: []
  },
}


export default function Score(state=initialState, action=null){
	switch(action.type) {
    case ScoreActionTypes.ADD_SCORE:
      return {
        score: action.score
      }

    default:
      return state;
  }
}
