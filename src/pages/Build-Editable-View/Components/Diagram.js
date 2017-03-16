import React from 'react';
import {observer} from 'mobx-react';
import {spring} from 'react-motion';
import PanelMenu from '../../../Components/PanelMenu.js';
import Gallery from './Gallery.js';
import _ from 'lodash';

@observer
class Diagram extends Gallery {
    constructor(props) {
        super(props)
        this.DATA = this.props.store.diagram_thumbs;
        this.deleteImg = this.deleteImg.bind(this, this.props.store.removeDiagramImg);
        this.addImg = this.addImg.bind(this, null, this.props.store.addGalleryImg); 
    }
    render() {
        const { diagram_thumbs } = this.props.store;

        return (
            <section id='diagram' className='panel'>
                {this.state.modal_visible && this.modal }
                {this.state.lightbox_visible && this.lightbox}
                <div className='fig-container' ref={fc => this.figContainer = fc}>
                    {(() => {
                        if(diagram_thumbs.length) {
                        return diagram_thumbs.map((thumb) => {
                        return (
                            <figure onClick={this.toggleLightbox.bind(this, thumb.id, this.props.store.diagram_thumbs)} 
                            key={thumb.id} 
                            data-id={thumb.id} 
                            className='gallery-fig diagram' >
                                <img 
                                src={thumb.url} 
                                alt='something'/>
                                <input 
                                onClick={(e) => {e.stopPropagation()}}
                                className='delete-box' 
                                style={{display: this.state.editing ? 'block' : 'none'}} 
                                type='checkbox'/>
                            </figure>
                            )
                        })
                    } else {
                        return <p style={{textAlign: 'center'}}>There's nothing here</p>
                    }})()}
                    <PanelMenu buttons={this.buttons} functions={[this.toggleEditState]}/>
                </div>
            </section>
        )
    }
}

export default Diagram;
