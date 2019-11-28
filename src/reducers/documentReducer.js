
import { LANDING_PAGE, TAB_NAME_CHANGE, DELETE, UPDATE_HISTORY, NEW_HISTORY, TITLE_SEARCH_CHANGE, UPDATE_CURRENT_INDEX, manageStorage } from '../actions/documentActions';

const initialState = {
  tabName: '',
  history: manageStorage(),
  currentIndex: 0,
  landingPage: true,
  searchTitle: ''
};

function documentReducer(state = initialState, action) {
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
    case DELETE:
      if(state.history.length === 1) return { ...state, history: [] };
      state.history.splice(action.payload, 1);
      return state;
    case TITLE_SEARCH_CHANGE:
      return { ...state, searchTitle: action.payload };
    case LANDING_PAGE:
      return { ...state, landingPage: false };
    default:
      return state;
  }
}

export default documentReducer;
