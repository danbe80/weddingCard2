import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from 'src/store';

export interface IFooter {
  curtPath: string | null;
}

@Module({ dynamic: true, store, name: 'footer' })
class Footer extends VuexModule implements IFooter {

  curtPath = localStorage.getItem('path') === null ? '/' : localStorage.getItem('path');

  @Mutation
  setCurrentPath(path : string | null) {
    this.curtPath = path;
  }


  @Action
  async changePath(reqPacket: string | null) {
    this.setCurrentPath(reqPacket);
  }
}
export const storeFooter = getModule(Footer);
