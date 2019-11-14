import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';

import { updateHistory } from '../actions/saveMarkdownActions';

import { getCurrentIndex, getHistoryArray } from '../selectors/saveMarkdownSelectors';

const Document = ({ historyArray, currentIndex, updateMarkdown }) => {
  let currentBody = '';
  if(historyArray[currentIndex]) currentBody = historyArray[currentIndex].body;

  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={currentBody} updateMarkdown={updateMarkdown} />
        <Preview markdown={currentBody} />
      </div>
    </>
  );
};

Document.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  historyArray: PropTypes.array.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentIndex: getCurrentIndex(state),
  historyArray: getHistoryArray(state),
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(updateHistory(target.value));
  }
});

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;



