import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';

import { sendMarkdownUpdate } from '../actions/documentActions';
import { getCurrentBody } from '../selectors/documentSelectors';

const Document = ({ currentBody, updateMarkdown }) => {
  
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
  currentBody: PropTypes.string,
  updateMarkdown: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentBody: getCurrentBody(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(sendMarkdownUpdate(target.value));
  }
});

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;



