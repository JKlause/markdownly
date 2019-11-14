import React from 'react';
import PropTypes from 'prop-types';

const SaveMarkdown = ({ handleAdd, handleChange, tabName, historyArray }) => {
  return (
    <>
    <input value={tabName} onChange={handleChange} placeholder="Name of File"></input>
    <button onClick={() => handleAdd(tabName, historyArray)}>Add Tab</button>
    </>
  );
};

SaveMarkdown.propTypes = {
  handleAdd: PropTypes.func,
  handleChange: PropTypes.func,
  tabName: PropTypes.string,
  historyArray: PropTypes.array
};

export default SaveMarkdown;



