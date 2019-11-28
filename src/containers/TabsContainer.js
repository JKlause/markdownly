import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tabs from '../components/markdown/Tabs';

import { updateHistory, updateCurrentIndex, deleteFile } from '../actions/documentActions';
import { getCurrentIndex, getTitleSearch, getFilteredHistory } from '../selectors/documentSelectors';


export default function TabsNavContainer() {
  const currentIndex = useSelector(state => getCurrentIndex(state));
  const historyArray = useSelector(state =>  getFilteredHistory(state));
  const searchTitle = useSelector(state => getTitleSearch(state));
  let currentTab = '';
  if(historyArray[currentIndex]) currentTab = historyArray[currentIndex].name;


  const dispatch = useDispatch();
  const handleSave = (oldTab, body) => dispatch(updateHistory(oldTab, body));

  const handleDelete = (index, historyArray) => {
    dispatch(deleteFile(index));
    dispatch(updateCurrentIndex(0));
    localStorage.setItem('history', JSON.stringify(historyArray));    
  };

  const selectTab = (newTab, historyArray, index) => {
    dispatch(updateCurrentIndex(index));
    if(historyArray.length === 0) return;
    if(historyArray[index].name === newTab) localStorage.setItem('history', JSON.stringify(historyArray));    
  };
  
  
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
}

