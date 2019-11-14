import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tabs from '../components/markdown/Tabs';
import { switchBody } from '../actions/documentActions';
import { getHistoryArray, getCurrentIndex } from '../selectors/saveMarkdownSelectors';
import { updateHistory, updateCurrentIndex, deleteFile } from '../actions/saveMarkdownActions';

const TabsNav = ({ handleDelete, historyArray, selectTab, handleSave, currentIndex }) => {
  let currentTab = '';
  if(historyArray[currentIndex]) currentTab = historyArray[currentIndex].name;
  
  return (
    <>
      <Tabs 
        handleSave={handleSave}
        currentTab={currentTab} 
        historyArray={historyArray} 
        handleDelete={handleDelete}
        selectTab={selectTab} />
    </>
  );
  
};

TabsNav.propTypes = {
  historyArray: PropTypes.array,
  currentIndex: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
  handleSave: PropTypes.func
};

const mapStateToProps = (state) => ({
  historyArray: getHistoryArray(state),
  currentIndex: getCurrentIndex(state),
});

const mapDispatchToProps = dispatch => ({
  handleSave(oldTab, body) {
    dispatch(updateHistory(oldTab, body));
  },
  selectTab(newTab, historyArray, index) {
    dispatch(updateCurrentIndex(index));
    if(historyArray.length === 0) return;
    if(historyArray[index].name === newTab) dispatch(switchBody(historyArray[index].body, index));

  },
  handleDelete(index) {
    dispatch(updateCurrentIndex(0));
    dispatch(deleteFile(index));
    
  
  }
});

// function deleteFunctionality(name, state) {
//   const tabNames = getTabNames(state);
  
// }

const TabsNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsNav);

export default TabsNavContainer;
