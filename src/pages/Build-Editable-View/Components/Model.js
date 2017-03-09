import React from 'react';
import {observer} from 'mobx-react';
import {spring} from 'react-motion';
import PanelMenu from '../../../Components/PanelMenu.js';

@observer
class Model extends React.Component {
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
        const {summary} = this.props.store;

        return (
            <section id='model' className='panel'>
                <iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=u388c4293-54c7-4bd6-9a0e-a5ad78edb006&width=580&height=326" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" width="100%" height="326" allowFullScreen></iframe>

                <PanelMenu buttons={this.buttons}/>
            </section>
        )
    }
}

export default Model;
