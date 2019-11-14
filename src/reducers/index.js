import { combineReducers } from 'redux';
import document from './documentReducer';
import tab from './tabReducer';
import saveMarkdown from './saveMarkdownReducer';

const reducer = combineReducers({
  document,
  tab,
  saveMarkdown
});

export default reducer;
