import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tabs from '../components/markdown/Tabs';
import { switchBody } from '../actions/documentActions';
import { getCurrentIndex, getTitleSearch, getFilteredHistory } from '../selectors/saveMarkdownSelectors';
import { updateHistory, updateCurrentIndex, deleteFile } from '../actions/saveMarkdownActions';

const TabsNav = () => {
  const currentIndex = useSelector(state => getCurrentIndex(state));
  const searchTitle = useSelector(state => getTitleSearch(state));
  const historyArray = useSelector(state => getFilteredHistory(state));

  const dispatch = useDispatch();
  const handleSave = (oldTab, body) => dispatch(updateHistory(oldTab, body));
  const selectTab = (newTab, historyArray, index) => {
    dispatch(updateCurrentIndex(index));
    if(historyArray.length === 0) return;
    if(historyArray[index].name === newTab) dispatch(switchBody(historyArray[index].body, index));
    localStorage.setItem('history', JSON.stringify(historyArray));   
  };
  const handleDelete = (index, historyArray) => {
    dispatch(updateCurrentIndex(0));
    dispatch(deleteFile(index));
    localStorage.setItem('history', JSON.stringify(historyArray));    
  };

  let currentTab = '';
  if(historyArray[currentIndex]) currentTab = historyArray[currentIndex].name;
  
  return (
    <>
      <Tabs 
        handleSave={handleSave}
        currentTab={currentTab} 
        historyArray={historyArray} 
        handleDelete={handleDelete}
        searchTitle={searchTitle}
        selectTab={selectTab} />
    </>
  );
  
};

export default TabsNav;
