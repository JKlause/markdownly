import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SaveMarkdown from '../components/markdown/SaveMarkdown';

import { sendTabName, sendTitleSearch, updateCurrentIndex } from '../actions/saveMarkdownActions';
import { getTabName, getHistoryArray, getTitleSearch } from '../selectors/saveMarkdownSelectors';

import { newHistory } from '../actions/saveMarkdownActions';
import { switchBody } from '../actions/documentActions';

const SaveMarkdownContainer = () => {
  const tabName = useSelector(state => getTabName(state));
  const historyArray = useSelector(state => getHistoryArray(state));
  const titleSearch = useSelector(state => getTitleSearch(state));

  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    if(target.name === 'add') dispatch(sendTabName(target.value));
    else dispatch(sendTitleSearch(target.value));
  };
  const handleAdd = (name, historyArray) => {
    let newName = name;
    if(historyArray.length > 0) {
      for(let i = 0; i < historyArray.length; i++) {
        if(name === historyArray[i].name) {
          newName = `${name}-copy`; 
        }
      }
    }
    dispatch(updateCurrentIndex(historyArray.length));
    dispatch(switchBody('', historyArray.length));
    dispatch(newHistory(newName, ''));
    localStorage.setItem('history', JSON.stringify(historyArray));
  };

  return (
    <SaveMarkdown 
      handleAdd={handleAdd} 
      handleChange={handleChange} 
      tabName={tabName} 
      titleSearch={titleSearch}
      historyArray={historyArray}
    />
  );
};

export default SaveMarkdownContainer;


