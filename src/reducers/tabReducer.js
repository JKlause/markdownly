import { ADD_TAB } from '../actions/saveMarkdownActions';

const initialState = {
  tabNames: [],
};

function tabReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TAB:
      return [...state, action.payload];
    
    default:
      return state;
  }
}

export default tabReducer;
