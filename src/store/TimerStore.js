import { observable, computed, action } from 'mobx';

/**
 * Timer MobX store
 */
class Timer {
  @observable start = Date.now(); // Never changed
  @observable current = Date.now(); // Changed by .tick() and other actions

  @computed
  get elapsedTime() {
    return this.current - this.start + 'milliseconds';
  }

  @action
  tick() {
    this.current = Date.now();
  }
}

export default Timer;
