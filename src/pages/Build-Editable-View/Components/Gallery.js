import React from 'react';
import { observer } from 'mobx-react';
import FloatButton from '../../../Components/FloatButton.js';
import { spring } from 'react-motion';
import PanelMenu from '../../../Components/PanelMenu.js';


@observer
class Gallery extends React.Component {

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
                    {gallery.map((href) => {
                        return (
                            <figure key={href} className='gallery-fig'>
                                <img src={href} alt='something'/>
                                <input className='delete-box' type='checkbox'/>
                            </figure>
                        )
                    })}
                    <PanelMenu buttons={this.buttons} />

                </div>
            </section>
        )
    }
}

export default Gallery;
