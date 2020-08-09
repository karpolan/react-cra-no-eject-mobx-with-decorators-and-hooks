import React, { useState, useCallback } from 'react';
import { Store } from './store';
import { Header, Content, Footer } from './components';
import './App.css';

/**
 * App with MobX store(s) injected via React Context API
 */
function App() {
  const [reloadKey, setReloadKey] = useState(0);

  const handleReloadClick = useCallback(() => {
    setReloadKey(reloadKey + 1);
  }, [reloadKey]);

  return (
    <Store>
      <div className="app">
        <Header onRemountClick={handleReloadClick} />
        <Content key={reloadKey} /* Changing of the key property unmount and mount again the React component */ />
        <Footer />
      </div>
    </Store>
  );
}

export default App;
