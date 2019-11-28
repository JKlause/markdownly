import React from 'react';
import { useSelector } from 'react-redux';

import App from '../components/App';

import { getLandingPage } from '../selectors/documentSelectors';

export default function AppContainer() {
  const landingPage = useSelector(getLandingPage);

  return <App landingPage={landingPage} />;
}
