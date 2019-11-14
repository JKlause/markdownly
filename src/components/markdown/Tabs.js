import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

const Tabs = ({ currentTab, currentBody, historyArray, tabNames, selectTab, handleDelete }) => {
  const mappedTabs = tabNames.map((tabName, index)=> {
    return <div key={index} onClick={() => selectTab(currentTab, currentBody, tabName, historyArray)}>
      <p>{tabName}</p>
      <sup><button onClick={() => handleDelete(tabName)}>X</button></sup> 
    </div>;
  });

  return (
    <ul className={styles.Tabs}>
      {mappedTabs}
    </ul>
  );
};

Tabs.propTypes = {
  handleDelete: PropTypes.func,
  currentBody: PropTypes.string.isRequired,
  currentTab: PropTypes.string.isRequired,
  selectTab: PropTypes.func,
  historyArray: PropTypes.array,
  tabNames: PropTypes.array.isRequired
};

export default Tabs;
