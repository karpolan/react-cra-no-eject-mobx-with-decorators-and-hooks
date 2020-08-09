import { observable, computed, action } from 'mobx';

/**
 * Timer MobX store
 */
class TimerStore {
  @observable start = Date.now(); // Changed by .reset()
  @observable current = Date.now(); // Changed by .tick()

  @computed
  get elapsedTime() {
    return Math.round(Math.max(0, this.current - this.start) / 1000) + ' sec';
  }

  @action
  tick() {
    this.current = Date.now();
    // console.log('TimerStore.tick() - elapsedTime:', this.elapsedTime);
  }

  @action
  reset() {
    this.start = Date.now();
    console.log('TimerStore.reset() - start:', this.start);
  }
}

export default TimerStore;
