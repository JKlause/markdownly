
import { TAB_NAME_CHANGE, DELETE, UPDATE_HISTORY, NEW_HISTORY, TITLE_SEARCH_CHANGE, UPDATE_CURRENT_INDEX, manageStorage } from '../actions/saveMarkdownActions';
import { SWITCH_BODY } from '../actions/documentActions';
import { LANDING_PAGE } from '../actions/landingPageActions';

const initialState = {
  tabName: '',
  history: manageStorage(),
  currentIndex: 0,
  landingPage: true,
  searchTitle: ''
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

    case LANDING_PAGE:
      return { ...state, landingPage: false };
    case DELETE:
      if(state.history.length === 1) return { ...state, history: [] };
      state.history.splice(action.payload, 1);
      return state;
    case TITLE_SEARCH_CHANGE:
      return { ...state, searchTitle: action.payload };
    default:
      return state;
  }
}

export default saveMarkdownReducer;
