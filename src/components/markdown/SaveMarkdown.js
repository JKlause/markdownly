import React from 'react';
import PropTypes from 'prop-types';

const SaveMarkdown = ({ handleAdd, handleChange, tabName, titleSearch, historyArray }) => {
  return (
    <>
    <input value={tabName} name = 'add' onChange={handleChange} placeholder="Name of File"></input>
    <button onClick={() => handleAdd(tabName, historyArray)}>Add Tab</button>
    <input value={titleSearch} name = 'search' onChange={handleChange} placeholder="Filter By Title"></input>
    </>
  );
};

SaveMarkdown.propTypes = {
  handleAdd: PropTypes.func,
  handleChange: PropTypes.func,
  tabName: PropTypes.string,
  titleSearch: PropTypes.string,
  historyArray: PropTypes.array
};

export default SaveMarkdown;



