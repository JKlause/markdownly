import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SaveMarkdown from '../components/markdown/SaveMarkdown';

import { sendTabName, sendTitleSearch, updateCurrentIndex, newHistory } from '../actions/documentActions';
import { getTabName, getHistoryArray, getTitleSearch } from '../selectors/documentSelectors';



export default function SaveMarkdownContainer() {

  const tabName = useSelector(state => getTabName(state));
  const historyArray = useSelector(state =>  getHistoryArray(state));
  const titleSearch = useSelector(state => getTitleSearch(state));


  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if(target.name === 'add') dispatch(sendTabName(target.value));
    else dispatch(sendTitleSearch(target.value));
  };

  const handleAdd = (name, historyArray) => {
    let newName = name;
    if(historyArray.length > 0) {
      newName = checkName(name, historyArray);
    }
    dispatch(updateCurrentIndex(historyArray.length));
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
}


function checkName(name, historyArray) {
  for(let i = 0; i < historyArray.length; i++) {
    if(name === historyArray[i].name) {
      name = `${name}-copy`; 
      checkName(name, historyArray);
    }
  }
  return name;
}
