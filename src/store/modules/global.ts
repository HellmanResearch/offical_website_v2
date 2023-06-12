import { action, makeObservable, observable } from 'mobx';

class GlobalStore {
  collapsed: boolean = false;
  constructor() {
    makeObservable(this, {
      collapsed: observable,
    });
  }

  SET_COLLAPSED(data: boolean) {
    this.collapsed = data;
  }
}

const globalStore = new GlobalStore();

export default globalStore;
