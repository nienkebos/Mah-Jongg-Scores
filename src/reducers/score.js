
const initialState = {
  scores: {
    concealed: 10,
    exposed: 8,
    images: 4
  }
}


export default function Score(state=initialState, action = false){

  	// switch(action.type) {
    //   case ScoreActionTypes.CALCULATE_SCORE:
  	// 	return {
  	// 		scores: state
    //   }
    //
    //   default:
    //     return state;
    //   }

    return state;
}
