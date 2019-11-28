import React from 'react';
import styles from './App.css';
import PropTypes from 'prop-types';
import Document from '../containers/Document';
import TabsNavContainer from '../containers/TabsContainer';
import SaveMarkdownContainerContainer from '../containers/SaveMarkdownContainer';
import LandingPageContainer from '../containers/LandingPageContainer';

export default function App({ landingPage }) {

  if(landingPage) return <LandingPageContainer />;
  
  return (
    <>
      <h1 className={styles.App}>Markdown Editor</h1>
      <SaveMarkdownContainerContainer />
      <TabsNavContainer />
      <Document />
    </>
  );
}

App.propTypes  = {
  landingPage: PropTypes.bool.isRequired
};
