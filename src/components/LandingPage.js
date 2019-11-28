import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';


export default function LandingPage({ handleEnter }) {
 
  return (
    <>
    <h1 className={styles.App}>Markdown Editor</h1>
    <button onClick={()=> handleEnter()}>Enter Here</button>
    </>
  );
}

LandingPage.propTypes = {
  handleEnter: PropTypes.func.isRequired
};
