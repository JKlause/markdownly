import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SaveMarkdown from '../components/markdown/SaveMarkdown';

import { sendTabName, updateCurrentIndex } from '../actions/saveMarkdownActions';
import { getTabName, getHistoryArray } from '../selectors/saveMarkdownSelectors';

import { newHistory } from '../actions/saveMarkdownActions';
import { switchBody } from '../actions/documentActions';

const SaveMarkdownContainer = ({ handleAdd, handleChange, tabName, historyArray }) => {
  return (
    <SaveMarkdown 
      handleAdd={handleAdd} 
      handleChange={handleChange} 
      tabName={tabName} 
      historyArray={historyArray}
    />
  );
};

SaveMarkdownContainer.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  tabName: PropTypes.string.isRequired,
  historyArray: PropTypes.array.isRequired
};



const mapStateToProps = (state) => ({
  tabName: getTabName(state),
  historyArray: getHistoryArray(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(sendTabName(target.value));
  },
  handleAdd(name, historyArray) {
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
  }
});

const SaveMarkdownContainerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveMarkdownContainer);

export default SaveMarkdownContainerContainer;


