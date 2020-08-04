import SampleStore from './Sample';
import TimerStore from './Timer';
import { StoreProvider, withStore, useStore } from './utils';

/**
 * Combined store creates internal instances of other simple stores
 */
class CombinedStore {
  constructor() {
    this.sample = new SampleStore(this);
    this.timer = new TimerStore(this);
  }
}

export { StoreProvider, withStore, useStore, CombinedStore, SampleStore, TimerStore };
