import React from 'react';
import {observer} from 'mobx-react';
import {spring} from 'react-motion';
import PanelMenu from '../../../Components/PanelMenu.js';

@observer
class Diagram extends React.Component {
    buttons = [
        {
            icon: 'delete',
            color: 'red',
            sp: spring(-60, {
                stiffness: 750,
                damping: 40
            })
        }, {
            icon: 'add',
            color: 'green',
            sp: spring(60, {
                stiffness: 750,
                damping: 40
            })
        }, {
            icon: 'watch',
            color: 'aqua',
            sp: spring(-120, {
                stiffness: 750,
                damping: 40
            })
        }, {
            icon: 'home',
            color: 'orange',
            sp: spring(120, {
                stiffness: 750,
                damping: 40
            })
        }
    ];
    render() {
        const { diagram_thumbs } = this.props.store;

        return (
            <section id='diagram' className='panel'>
                {diagram_thumbs.map((thumb) => {
                    return <img src={thumb} key={thumb} className='diagram-thumb' />
                })}
                <PanelMenu buttons={this.buttons}/>
            </section>
        )
    }
}

export default Diagram;
