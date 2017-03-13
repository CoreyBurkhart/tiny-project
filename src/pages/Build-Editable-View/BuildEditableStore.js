import { observable, action } from 'mobx';
import _ from 'lodash';
/*
Model:
{
  title: String,
  builders: [...{thumb: String, name: String}]
  gallery_thumbs: [...String],
  gallery_src: [...String],
  summary: String?
}

*/
// generate a randomish ID
function getId() {
  return Math.random().toString(36).substring(2, 9);
}


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
  @observable gallery = [
    { 
      id: getId(),
      url: 'http://www.wakingtimes.com/wp-content/uploads/2013/02/Tiny-House-at-Night.jpg'
    }, 
    {
      id: getId(),
      url: 'http://www.wakingtimes.com/wp-content/uploads/2015/04/glamper-tiny-house-camper-4.jpg'
    },
    {
      id: getId(),
      url: 'https://www.tumbleweedhouses.com/wp-content/uploads/tumbleweed-tiny-house-elm-0007.jpg'
    },{
      id: getId(),
      url: 'https://www.tumbleweedhouses.com/wp-content/uploads/tumbleweed-tiny-house-elm-0010.jpg' 
    }, 
    {
      id: getId(), 
      url: 'https://www.tumbleweedhouses.com/wp-content/uploads/tumbleweed-tiny-house-elm-0014.jpg'
    }
  ];
  @observable summary = 'this is an example summary!';
  @observable diagram_thumbs = [
    "https://www.supermodulor.com/wp-content/uploads/2017/01/outstanding-2d-house-plans-flickr-photo-sharing-house-2d-plan-medem-co-house-plan-in-autocad-2d-picture.jpg",
    "https://www.supermodulor.com/wp-content/uploads/2017/01/outstanding-autocad-for-home-design-home-design-ideas-house-plan-in-autocad-2d-pics.jpg"
    ];
  @observable model = 'https://3dwarehouse.sketchup.com/embed.html?mid=u388c4293-54c7-4bd6-9a0e-a5ad78edb006&width=580&height=326';

  @action removeGalleryImg(ids) {
    let removed = _.remove(this.gallery, (el) => {
      return ids.includes(el.id); 
    })
    return removed;
  }
}

let bStore = window.bStore = BuildEditableStore;

export default bStore;
