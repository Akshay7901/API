import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from './components/ui/Toaster';
import Layout from './components/Layout';
import PhoneVerificationReport from './pages/PhoneVerificationReport';

function App() {
  return (
    <Router>
      <Toaster />
      <Layout>
        <PhoneVerificationReport />
      </Layout>
    </Router>
  );
}

export default App;