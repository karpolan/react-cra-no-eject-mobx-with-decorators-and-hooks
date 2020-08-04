import { observable, computed, action } from 'mobx';

/**
 * Sample MobX store
 */
class Sample {
  @observable observable = 0; // Changed by actions

  @computed
  get computed() {
    return observable * observable;
  }

  @action
  action() {
    observable = observable + 1;
  }
}

export default Sample;
