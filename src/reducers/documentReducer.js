import { MARKDOWN_UPDATE, SWITCH_BODY } from '../actions/documentActions';
import { UPDATE_CURRENT_TAB } from '../actions/tabActions';

const documentState = {
  currentTab: '',
  currentBody: '',
};

function documentReducer(state = documentState, action) {
  console.log(state, action);
  switch(action.type) {
    case MARKDOWN_UPDATE:
      return { ...state, currentBody: action.payload };
    case UPDATE_CURRENT_TAB:
      return { ...state, currentTab: action.payload };
    case SWITCH_BODY:

      return { ...state, currentBody: action.payload };
    default:
      return state;
  }
}

export default documentReducer;
