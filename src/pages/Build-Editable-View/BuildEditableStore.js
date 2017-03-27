import { observable, action, computed } from 'mobx';
import { markdown } from 'markdown';
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
  constructor() {
  this.removeGalleryImg = this.removeGalleryImg.bind(this);
  this.addGalleryImg = this.addGalleryImg.bind(this);
  }


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
  @observable summary = {
    saved: true,
    html: '<h1>hi</h1>',
    markdown: " Blockquotes are very handy in email to emulate reply text.> This line is part of the same quote.Quote break.> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. "
  };
  @observable diagram_thumbs = [
    {
      id: getId(),
      url: "https://www.supermodulor.com/wp-content/uploads/2017/01/outstanding-2d-house-plans-flickr-photo-sharing-house-2d-plan-medem-co-house-plan-in-autocad-2d-picture.jpg"
    }, 
    {
      id: getId(),
      url: "https://www.supermodulor.com/wp-content/uploads/2017/01/outstanding-autocad-for-home-design-home-design-ideas-house-plan-in-autocad-2d-pics.jpg"
    }
  ];
  @observable model = 'https://3dwarehouse.sketchup.com/embed.html?mid=u388c4293-54c7-4bd6-9a0e-a5ad78edb006&width=580&height=326';
  @action updateTitle(title) {
    if(_.isString(title)) {
      this.title = title
    }
  }
  @action removeGalleryImg(ids, arr) {
    let removed = _.remove(arr, (el) => {
      return ids.includes(el.id); 
    })
        console.log('called removeGalleryImg')
    return removed;
  }

  @action addGalleryImg(promise, arr) {
      promise.then((result) => {
        let img = {
          id: getId(),
          url: result
        }
        arr.push(img)
      })
      .catch((error) => {
        console.log(error)
        console.log('error')
      });
  }
  @action removeDiagramImg = this.removeGalleryImg.bind(this);
  @action addDiagramImg = this.addGalleryImg.bind(this);

  @action setSummarySavedState(bool) {
    if(_.isBoolean(bool)) {
      this.summary.saved = bool;
    } else {
      throw new Error('cannot set summary saved state to non boolean value')
    }
  }
  @action updateSummary(md) {
    if(_.isString(md)) {
      this.summary.markdown = md;
      this.summary.html = markdown.toHTML(md);
      this.summary.saved = true;
      console.log(this.summary.html)
    }
  }
  @computed get summaryHTML() {
    return markdown.toHTML(this.summary.markdown);
  }
}

export default BuildEditableStore;
