import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import FloatButton from '../../../Components/FloatButton.js';
import { spring } from 'react-motion';
import PanelMenu from '../../../Components/PanelMenu.js';
import _ from 'lodash';
import ConfirmModal from '../../../Components/ConfirmModal.js';
import Lightbox from '../../../Components/Lightbox.js';

// TODO: add lightbox


@observer
class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            editing: false,
            modal_visible: false,
            lightbox_visible: false
        }
        this.modal = null;
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
            let getImageFromDialog = (file) => {
                return new Promise((resolve, reject) => {
                    let reader = new FileReader()
                    reader.onload = (e) => {
                        resolve(reader.result)
                    }
                    reader.addEventListener('abort error', (e) => {
                        reject(e)
                    })
                    reader.readAsDataURL(file);
                })
            }

            let filePromises = files.map((file) => {
                return this.props.store.addGalleryImg(getImageFromDialog(file));
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
            const checked = this.getCheckedFigs(this.figContainer); //returns array of ids
            const continueDelete = () => {
                this.props.store.removeGalleryImg(checked);
            }
            const dismissModal = () => {
                this.setState({modal_visible: !this.state.modal_visible})
            }
            // TODO confirm action with user
            const buttons = [
                {
                    BUTTON_TEXT: 'DELETE',
                    BUTTON_CLASS: 'delete',
                    BUTTON_STACK: [continueDelete, dismissModal]
                },
                {
                    BUTTON_TEXT: 'Cancel',
                    BUTTON_CLASS: 'cancel',                    
                    BUTTON_STACK: [dismissModal]
                }
            ]
            const question = 'Delete these images?';
            if(checked.length) {
                this.setState({modal_visible: true});
            }
            this.modal = <ConfirmModal question={question} parent={this} buttons={buttons} />
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

    toggleLightbox(id) {
        this.setState({lightbox_visible: !this.state.lightbox_visible})
        const index = _.findIndex(this.props.store.gallery, ['id', id]) 
        this.lightbox = <Lightbox index={index} images={this.props.store.gallery} />
    } 

    render() {
        const {gallery} = this.props.store;
        return (
            <section id='gallery' className='panel'>
                {this.state.modal_visible && this.modal }
                {this.state.lightbox_visible && this.lightbox}
                <div className='fig-container' ref={fc => this.figContainer = fc}>
                    {(() => {
                        if(gallery.length) {
                        return gallery.map((thumb) => {
                        return (
                            <figure onClick={this.toggleLightbox.bind(this, thumb.id)} key={thumb.id} data-id={thumb.id} className='gallery-fig' >
                                    <img src={thumb.url} alt='something'/>
                                <input className='delete-box' style={{display: this.state.editing ? 'block' : 'none'}} type='checkbox'/>
                            </figure>
                            )
                        })
                    } else {
                        return <p style={{textAlign: 'center'}}>You have no images in your gallery <span style={{color: 'royalblue'}} onClick={this.addImg} >click here</span> to add one!</p>
                    }})()}
                    <PanelMenu buttons={this.buttons} functions={[this.toggleEditState]}/>
                </div>
            </section>
        )
    }
}

export default Gallery;
