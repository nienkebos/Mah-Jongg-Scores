import * as ScoreActionTypes from '../actiontypes/score'

const initialState = {
  score: {
    concealed: '',
    exposed: '',
    images: ''
  }
}


export default function Score(state=initialState, action){
  console.log(action);

	switch(action.type) {
    case ScoreActionTypes.ADD_SCORE:
      console.log(2);
      return {
        state,
        score: action.score
      }

    default:
    console.log(3);
      return state;
  }

  console.log(4,state);
}
