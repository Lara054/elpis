import React from 'react';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  return (
    <>
      <AppRoutes />
      <ScrollToTopButton />
    </>
  );
}

export default App;
