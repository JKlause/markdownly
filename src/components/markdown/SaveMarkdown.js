import React from 'react';
import PropTypes from 'prop-types';

const SaveMarkdown = ({ handleAdd, handleChange, tabName }) => {
  return (
    <>
    <input value={tabName} onChange={handleChange} placeholder="Name of File"></input>
    <button onClick={() => handleAdd(tabName)}>Add Tab</button>
    </>
  );
};

SaveMarkdown.propTypes = {
  handleAdd: PropTypes.func,
  handleChange: PropTypes.func,
  tabName: PropTypes.string
};

export default SaveMarkdown;



