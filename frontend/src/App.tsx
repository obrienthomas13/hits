import React from 'react';
import Routes from './components/routes';
import Navigation from './components/navigation';

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Routes />
    </div>
  );
};

export default App;
