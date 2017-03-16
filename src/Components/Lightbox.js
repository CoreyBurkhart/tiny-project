import React, { Component, PropTypes } from 'react';
import Modal from './Modal';
import ReactSwipe from 'react-swipe';
import _ from 'lodash';

// TODO: lightbox is really slow to open with a lot of pics

class Lightbox extends Component {
    constructor() {
        super()
        this.dismiss = this.dismiss.bind(this)
        this.swipeOptions = {
            continuous: false,
            disableScroll: true,
            stopPropagation: true
        }
    }

    componentWillMount() {
        this.swipeOptions = _.extend(this.swipeOptions, _.extend(this.swipeOptions, {startSlide: this.props.index}))
    }
    dismiss() {
        this.props.dismissLightbox()
    }
    render() {
        return (
            <Modal 
                modalAttributes={{className: 'modal', onClick: this.props.dismiss}}
                modalContentAttributes={{className: 'lightbox-container'}} >
                <i className='material-icons dismiss-lightbox' 
                    onClick={this.props.dismiss}>
                    close
                </i>
                <ReactSwipe swipeOptions={this.swipeOptions}>
                    {this.props.images.map((img, i) => {
                        return <img key={i + '' + img.id} className='lightbox-img' src={img.url} />
                    })}
                </ReactSwipe>
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