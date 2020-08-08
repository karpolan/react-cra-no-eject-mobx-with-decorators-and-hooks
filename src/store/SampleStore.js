import { observable, computed, action } from 'mobx';

/**
 * Sample MobX store
 */
class SampleStore {
  @observable observable = 0; // Changed by actions

  @computed
  get computed() {
    return this.observable * this.observable;
  }

  @action
  action() {
    this.observable = this.observable + 1;
    console.log('SampleStore.action() - observable:', this.observable);
  }
}

export default SampleStore;
