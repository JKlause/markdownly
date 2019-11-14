import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';


const Tabs = ({ historyArray, selectTab, handleDelete }) => {
  const mappedTabs = historyArray.map(({ name }, index)=> {
    return <div key={index} onClick={() => selectTab(name, historyArray, index)}>
      <p>{name}</p>
      <sup><button onClick={() => handleDelete(index)}>X</button></sup> 
    </div>;
  });

  useEffect(() => {
    
  }, [historyArray]);

  return (
    <ul className={styles.Tabs}>
      {mappedTabs}
    </ul>
    
  );
};

Tabs.propTypes = {
  handleDelete: PropTypes.func,
  selectTab: PropTypes.func,
  handleSave: PropTypes.func,
  historyArray: PropTypes.array,
};

export default Tabs;
