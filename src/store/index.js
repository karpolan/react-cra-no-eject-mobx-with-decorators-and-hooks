import React from 'react';
import { StoreProvider, withStore, useStore } from './utils';
import SampleStore from './SampleStore';
import TimerStore from './TimerStore';

/**
 * Main Store includes internal instances of other Simple stores
 */
class MainStore {
  constructor() {
    this.sample = new SampleStore(this);
    this.timer = new TimerStore(this);
  }
}

/**
 * Internal singleton instance of the Main Store
 */
const mainStore = new MainStore();

/**
 * Store Provider with Main Store
 *
 * import Store from './store'
 * ...
 * <Store>
 *  <App/>
 * </Store>
 */
const Store = ({ children }) => {
  return <StoreProvider store={mainStore}>{children}</StoreProvider>;
};

/**
 * Only required tools are exported
 */
export { Store, withStore, useStore };
