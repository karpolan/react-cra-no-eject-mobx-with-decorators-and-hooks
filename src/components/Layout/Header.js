import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../../store';

/**
 * Renders Header with some controls
 */
const Header = ({ onRemountClick = () => console.warn('Unhandled Header.onRemountClick()') }) => {
  const store = useStore();

  useEffect(() => {
    const timer = setInterval(() => {
      store.timer.tick();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleTimerTick = () => {
    store.timer.reset();
  };

  const handleSampleAction = () => {
    store.sample.action();
  };

  return (
    <header>
      <h1>Create React App with MobX Demo</h1>
      <h2>No eject required to get decorators work</h2>
      <h2>MobX is compatible with Hooks, setState() and React Context</h2>
      <div className="buttons">
        <button onClick={handleTimerTick}>Reset Timer Store</button>
        <button onClick={handleSampleAction}>Increase Observable Value</button>
        <button onClick={onRemountClick}>Remount - resets internal state</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  onRemountClick: PropTypes.func,
};

export default Header;
