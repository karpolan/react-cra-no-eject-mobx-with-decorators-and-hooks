import React, { useEffect } from 'react';
import { useStore } from '../store';

/**
 * Renders Header with some controls
 */
const Header = () => {
  const store = useStore();
  console.log('Header() - store:', store);

  useEffect(() => {
    const timer = setInterval(() => {
      store.timer.tick();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSampleAction = () => {
    store.sample.action();
  };

  const handleTimerTick = () => {
    store.timer.reset();
  };

  return (
    <header>
      <h1>Create React App with MobX Demo</h1>
      <h2>No eject required to get decorators work</h2>
      <h2>MobX is compatible with Hooks, setState() and React Context</h2>
      <div className="buttons">
        <button onClick={handleSampleAction}> store.sample.action()</button>
        <button onClick={handleTimerTick}>store.timer.reset()</button>
      </div>
    </header>
  );
};

export default Header;
