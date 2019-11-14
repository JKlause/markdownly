import { TAB_NAME_CHANGE, DELETE, UPDATE_HISTORY, NEW_HISTORY, UPDATE_CURRENT_INDEX } from '../actions/saveMarkdownActions';
import { SWITCH_BODY } from '../actions/documentActions';

const initialState = {
  tabName: '',
  history: [],
  currentIndex: 0,
};

function saveMarkdownReducer(state = initialState, action) {
  switch(action.type) {
    case TAB_NAME_CHANGE:
      return { ...state, tabName: action.payload };
    case NEW_HISTORY:
      return { ...state, history: [...state.history, { name: action.payload[0], body: action.payload[1] }] };
    case UPDATE_HISTORY:
      
      return { ...state, history: state.history.map((item, index) => {
        if(index === state.currentIndex) {
          return { ...item, body: action.payload };
        }
        return item;
      }) };
    case UPDATE_CURRENT_INDEX:
      return { ...state, currentIndex: action.payload };
    case SWITCH_BODY:
      return { ...state, history: state.history.map((item, index) => {
        if(index === action.index) {
          return { ...item, body: action.payload };
        }
        return item;
      }) };
    case DELETE:
      if(state.history.length === 1) return { ...state, history: [] };
      state.history.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}

export default saveMarkdownReducer;
