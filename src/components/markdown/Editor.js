import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdown, updateMarkdown }) {
 
  return (
    <textarea className={styles.Editor} value={markdown} onChange={updateMarkdown} />
  );
}

Editor.propTypes = {
  markdown: PropTypes.string,
  updateMarkdown: PropTypes.func.isRequired
};

export default Editor;
