import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';

import { updateHistory } from '../actions/documentActions';
import { getCurrentIndex, getFilteredHistory } from '../selectors/documentSelectors';


export default function DocumentContainer() {


  const currentIndex = useSelector(state => getCurrentIndex(state));
  const historyArray = useSelector(state =>  getFilteredHistory(state));
  let currentBody = '';
  if(historyArray[currentIndex]) currentBody = historyArray[currentIndex].body;

  const dispatch = useDispatch();
  const updateMarkdown = ({ target }) => dispatch(updateHistory(target.value));

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(historyArray));
  });

  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={currentBody} updateMarkdown={updateMarkdown}/>
        <Preview markdown={currentBody} />
      </div>
    </>
  );
}

