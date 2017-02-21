import { observable } from 'mobx';

/*
Model:
{
  title: String,
  builders: [...{thumb: String, name: String}]
  gallery_thumbs: [...String],
  gallery_src: [...String]
}

*/








class BuildEditableStore {
  @observable title = 'My Tiny House Build';
  @observable builders = [{
      name: 'George',
      thumb:      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg/800px-Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg'
    },
    {
      name: 'Bob',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Portrait_of_George_Washington-transparent.png/800px-Portrait_of_George_Washington-transparent.png'
    }
]
  @observable gallery = ['http://www.wakingtimes.com/wp-content/uploads/2013/02/Tiny-House-at-Night.jpg', 'http://www.wakingtimes.com/wp-content/uploads/2015/04/glamper-tiny-house-camper-4.jpg', 'https://www.tumbleweedhouses.com/wp-content/uploads/tumbleweed-tiny-house-elm-0007.jpg', 'https://www.tumbleweedhouses.com/wp-content/uploads/tumbleweed-tiny-house-elm-0010.jpg', 'https://www.tumbleweedhouses.com/wp-content/uploads/tumbleweed-tiny-house-elm-0014.jpg']
}

let bStore = window.bStore = new BuildEditableStore()

export default bStore;
