import React from 'react';
import { observer } from 'mobx-react';
import FloatButton from '../../../Components/FloatButton.js';
import { spring } from 'react-motion';
import PanelMenu from '../../../Components/PanelMenu.js';


@observer
class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            editing: false,
            checked_ids: [],
            figs: []
        }
        this.toggleEditState = this.toggleEditState.bind(this)
    }

    toggleEditState() {
        this.setState({editing: !this.state.editing})
    }

    deleteImg() {
        if(this.state.editing) {
            //delete the items checked
            let checked
        }
    }

    getCheckedFigs(refs) {
        refs = refs.filter((figure) => {
            let checkbox = figure.querySelector('.delete-box')
            return checkbox.checked;
        })
        return refs;
    }

    buttons = [
        {icon: 'delete', color: 'red',sp: spring(-60, {stiffness: 750, damping: 40})},
        {icon:  'add', color: 'green',sp: spring(60, {stiffness: 750, damping: 40})},
        {icon:  'watch', color: 'aqua',sp: spring(-120, {stiffness: 750, damping: 40})},
        {icon:  'home', color: 'orange',sp: spring(120, {stiffness: 750, damping: 40})}
    ];

    render() {
        const {gallery} = this.props.store;
        return (
            <section id='gallery' className='panel'>
                <div className='fig-container'>
                    {gallery.map((thumb) => {
                        return (
                            <figure key={thumb.id} className='gallery-fig' ref={fig => this.state.figs.push(fig)}>
                                <img src={thumb.url} alt='something'/>
                                <input className='delete-box' style={{display: this.state.editing ? 'block' : 'none'}} type='checkbox'/>
                            </figure>
                        )
                    })}
                    <PanelMenu buttons={this.buttons} editHandler={this.toggleEditState}/>
                </div>
            </section>
        )
    }
}

export default Gallery;
