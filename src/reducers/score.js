import * as ScoreActionTypes from '../actiontypes/score'

const initialState = {
  score: {
    concealed: 5,
    exposed: 5,
    images: 5
  },
  mahJongg: false,
  lastStone: ''
}


export default function Score(state=initialState, action){
	switch(action.type) {
    case ScoreActionTypes.ADD_SCORE:
      return {
        score: action.score
      }

    case ScoreActionTypes.ADD_MAHJONGG:
    console.log('reducer',action);
      return {
        mahJongg: action.mahJongg,
        lastStone: action.lastStone
      }


    default:
      return state;
  }
}
