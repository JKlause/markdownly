import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tabs from '../components/markdown/Tabs';
import { switchBody } from '../actions/documentActions';
import { getCurrentIndex, getTitleSearch, getFilteredHistory } from '../selectors/saveMarkdownSelectors';
import { updateHistory, updateCurrentIndex, deleteFile } from '../actions/saveMarkdownActions';

const TabsNav = ({ handleDelete, historyArray, selectTab, searchTitle, handleSave, currentIndex }) => {
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

TabsNav.propTypes = {
  historyArray: PropTypes.array,
  currentIndex: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired,
  searchTitle: PropTypes.string,
  handleDelete: PropTypes.func,
  handleSave: PropTypes.func
};

const mapStateToProps = (state) => ({
  historyArray: getFilteredHistory(state),
  currentIndex: getCurrentIndex(state),
  searchTitle: getTitleSearch(state)
});

const mapDispatchToProps = dispatch => ({
  handleSave(oldTab, body) {
    dispatch(updateHistory(oldTab, body));
  },
  selectTab(newTab, historyArray, index) {
    dispatch(updateCurrentIndex(index));
    if(historyArray.length === 0) return;
    if(historyArray[index].name === newTab) dispatch(switchBody(historyArray[index].body, index));
    localStorage.setItem('history', JSON.stringify(historyArray));    
  },
  handleDelete(index, historyArray) {
    dispatch(updateCurrentIndex(0));
    dispatch(deleteFile(index));
    localStorage.setItem('history', JSON.stringify(historyArray));    
  }
});

const TabsNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsNav);

export default TabsNavContainer;
