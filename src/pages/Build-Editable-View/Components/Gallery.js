import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import FloatButton from '../../../Components/FloatButton.js';
import { spring } from 'react-motion';
import PanelMenu from '../../../Components/PanelMenu.js';
import _ from 'lodash';

@observer
class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            editing: false,
        }
        this.toggleEditState = this.toggleEditState.bind(this)
        this.deleteImg = this.deleteImg.bind(this);
        this.addImg = this.addImg.bind(this);
        this.buttons = [
            {
                icon: 'delete',
                onClick: this.deleteImg,
                color: 'red',
                sp: spring(-60, {stiffness: 750, damping: 40})
            },
            {
                icon:  'add',
                inputElement: <input style={{display: 'none'}} multiple ref={(el => this.addImgInput = el)} type='file' />,
                onClick: this.addImg,
                color: 'green',
                sp: spring(60, {stiffness: 750, damping: 40})
            }
    ];
    }

    toggleEditState() {
        this.setState({editing: !this.state.editing})
    }

    addImg(e) {
        let change = (e) => {
            let files = [...e.target.files];
            //get any not images
            let notImages = _.remove(files, (f) => {
                // console.log(f);
                return f.type !== 'image/jpeg'
            })
            let reader = new FileReader();
            let urlFiles = [];

            reader.onload = (e) => {
                urlFiles.push(reader.result);
                this.props.store.addGalleryImg(urlFiles);
            }
            files.forEach((file) => {
                urlFiles.push(reader.readAsDataURL(file));
            })
            if(notImages.length) {
                const names = notImages.map(file => '- ' + file.name);
                alert(`the file types you attempted to upload are not allowed\n ${names.join('\n')}`)
            }
        }

        this.addImgInput.onchange = change;        // trigger hidden input
        this.addImgInput.click();
    }
    deleteImg() {
        if(this.state.editing) {
            //delete the items checked
            let checked = this.getCheckedFigs(this.figContainer); //returns array of ids
            let removed = this.props.store.removeGalleryImg(checked);
            // console.log(removed);
        } else {
            //only can delete when editing
            return false;
        }
    }

    getCheckedFigs(container) {
        let figs = container.getElementsByClassName('gallery-fig');
        let ids = [...figs].filter((fig) => {
            let inp = fig.querySelector('.delete-box');
            return inp.checked;
        })
        //get the ids
        .map((checked) => {
            return checked.attributes['data-id'].value;
        })
        
        return ids;
    }



    render() {
        const {gallery} = this.props.store;
        return (
            <section id='gallery' className='panel'>
                <div className='fig-container' ref={fc => this.figContainer = fc}>
                    {(() => {
                        if(gallery.length) {
                        return gallery.map((thumb) => {
                        return (
                            <figure key={thumb.id} data-id={thumb.id} className='gallery-fig' >
                                <img src={thumb.url} alt='something'/>
                                <input className='delete-box' style={{display: this.state.editing ? 'block' : 'none'}} type='checkbox'/>
                            </figure>
                            )
                        })
                    } else {
                        return <p style={{textAlign: 'center'}}>You have no images in your gallery <span style={{color: 'royalblue'}} onClick={this.addImg} >click here</span> to add one!</p>
                    }})()}
                    <PanelMenu buttons={this.buttons} functions={[this.toggleEditState]}/>
                {/*<input style={{zIndex: '10000'}} type='file' />*/}
                </div>
            </section>
        )
    }
}

export default Gallery;
