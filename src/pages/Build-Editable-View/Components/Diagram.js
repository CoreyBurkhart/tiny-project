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
        const {summary} = this.props.store;

        return (
            <section id='diagram' className='panel'>
                <img src="https://www.supermodulor.com/wp-content/uploads/2017/01/outstanding-2d-house-plans-flickr-photo-sharing-house-2d-plan-medem-co-house-plan-in-autocad-2d-picture.jpg"/>
                <img src="https://www.supermodulor.com/wp-content/uploads/2017/01/outstanding-autocad-for-home-design-home-design-ideas-house-plan-in-autocad-2d-pics.jpg"/>

                <PanelMenu buttons={this.buttons}/>
            </section>
        )
    }
}

export default Diagram;
