import React, { Component, PropTypes } from 'react';
import Modal from './Modal';

class Lightbox extends Component {
    constructor() {
        super()
        this.dismiss = this.dismiss.bind(this)
    }
    dismiss() {
        
    }
    nextImg() {

    }
    previousImg() {

    }
    
    render() {
        return (
            <Modal 
            modalAttributes={{className: 'modal' }}
            modalContentAttributes={{className: 'lightbox-container'}} >
                <i onClick={this.dismiss} className={'material-icons'} >close</i>
                <img className='lightbox-img' src={this.props.images[this.props.index].url} />
            </Modal>
        )
    }
}

Lightbox.PropTypes = {
    images: React.PropTypes.array,
    images: React.PropTypes.isRequired,
    index: React.PropTypes.number,
    index: React.PropTypes.isRequired
}

export default Lightbox;