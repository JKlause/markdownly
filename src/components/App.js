import React from 'react';
import Document from '../containers/Document';
import styles from './App.css';
import TabsNavContainer from '../containers/TabsContainer';
import SaveMarkdownContainerContainer from '../containers/SaveMarkdownContainer';

export default function App() {
  return (
    <>
      <h1 className={styles.App}>Markdown Editor</h1>
      <SaveMarkdownContainerContainer />
      <TabsNavContainer />
      <Document />
    </>
  );
}
