import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import store from 'src/store';

export interface ILang {
  lang: string | null;
}

@Module({ dynamic: true, store, name: 'lang' })
class Lang extends VuexModule implements ILang {

  lang = localStorage.getItem('lang') === null ? 'kr' : localStorage.getItem('lang');


  @Mutation
  setChangeLang(lang: string | null) {
    this.lang = lang;
  }

  @Action
  async changeLang(reqPacket: string | null) {
    this.setChangeLang(reqPacket);
  }

}
export const storeLang = getModule(Lang);
