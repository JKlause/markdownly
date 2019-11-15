import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';
import { connect } from 'react-redux';

import { leaveLandingPage } from '../actions/landingPageActions';

function LandingPage({ handleEnter }) {
 
  return (
    <>
    <h1 className={styles.App}>Markdown Editor</h1>
    <button onClick={()=> handleEnter}>Enter Here</button>
    </>
  );
}

LandingPage.propTypes = {
  handleEnter: PropTypes.func.isRequired
};

const mapStateToProps = () => {

};

const mapDispatchToProps = dispatch => ({
  handleEnter() {
    dispatch(leaveLandingPage());
  }
});

const LandingPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);

export default LandingPageContainer;
