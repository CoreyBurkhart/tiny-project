import { observable } from 'mobx';

class BuildEditableStore {
  @observable title = 'My Tiny House Build';
  @observable gallery = ['http://www.wakingtimes.com/wp-content/uploads/2013/02/Tiny-House-at-Night.jpg', 'http://www.wakingtimes.com/wp-content/uploads/2015/04/glamper-tiny-house-camper-4.jpg']
}

let bStore = window.bStore = new BuildEditableStore()

export default bStore;
