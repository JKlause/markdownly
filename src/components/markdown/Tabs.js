import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

const Tabs = ({ arrayTabs, handleTab, handleAdd, handleDelete }) => {
  const mappedTabs = arrayTabs.map((tab, index)=> {
    return <div key={index} onClick={() => handleTab(tab)}>
      <p>{tab}</p>
      <sup><button onClick={() => handleDelete(tab)}>X</button></sup> 
    </div>;
  });

  return (
    <ul className={styles.Tabs}>
      {mappedTabs}
      <button onClick={() => handleAdd()}>Add Tab</button>
    </ul>
  );
};

Tabs.propTypes = {
  handleDelete: PropTypes.func,
  handleTab: PropTypes.func,
  handleAdd: PropTypes.func,
  arrayTabs: PropTypes.array.isRequired
};

export default Tabs;
