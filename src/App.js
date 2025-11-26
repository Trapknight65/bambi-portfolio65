import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio';
import About from './About';
import MultiStepForm from './MultiStepForm';
import Discover from './Discover';
import ClientFeedback from './ClientFeedback';
import CookieSettings from './CookieSettings';
import TermsConditions from './TermsConditions';
import PrivacyPolicy from './PrivacyPolicy';

import LoadingScreen from './LoadingScreen';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function onHash() {
      setRoute(window.location.hash || '#/');
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // ---- LOADING SCREEN ----
  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  // ---- ROUTING ----

  if (route.startsWith('#/about')) {
    return <About />;
  }

  if (route.startsWith('#/contact-form')) {
    return <MultiStepForm />;
  }

  if (route.startsWith('#/discover')) {
    return <Discover />;
  }

  if (route.startsWith('#/client-feedback')) {
    return <ClientFeedback />;
  }

  if (route.startsWith('#/cookie-settings')) {
    return <CookieSettings />;
  }

  if (route.startsWith('#/terms')) {
    return <TermsConditions />;
  }

  if (route.startsWith('#/privacy')) {
    return <PrivacyPolicy />;
  }

  // default to portfolio
  return <Portfolio />;
}

export default App;
