import { TAB_NAME_CHANGE, UPDATE_HISTORY, NEW_HISTORY } from '../actions/saveMarkdownActions';


const initialState = {
  tabName: '',
  history: []
};

function documentReducer(state = initialState, action) {
  switch(action.type) {
    case TAB_NAME_CHANGE:
      return { ...state, tabName: action.payload };
    case NEW_HISTORY:
      return { ...state, history: [...state.history, { name: action.payload[0], body: action.payload[1] }] };
    case UPDATE_HISTORY:
      for(let i = 0; i < state.history.length; i++) {
        if(action.payload[0] === state.history[i].name) {
          state.history.splice(i, 1, { name: action.payload[0], body: action.payload[1] });
        }
      }
      return { ...state };
    default:
      return state;
  }
}

export default documentReducer;
