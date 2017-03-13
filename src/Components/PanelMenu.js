import React from 'react';
import FloatButton from './FloatButton.js';
import { Motion, spring } from 'react-motion';

class PanelMenu extends React.Component {
    constructor() {
        super()
        this.state = {menuState: false};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({menuState: !this.state.menuState})
        //set the state for the parent Component
        this.props.editHandler();
    }


    render() {
        return (
            <div className='panel-options-div'>
                {
                    this.props.buttons.map((obj) => {
                        return <Motion key={obj.icon} style={{x: this.state.menuState ? obj.sp : spring(0, {stiffness: 1000, damping: 40})}} >
                                {({ x }) => {
                                    return <FloatButton icon={obj.icon} id={obj.id || '' } onClick={this.handleClick} style={{transform: `translate3d(${x}px, 0px, 0px)`, background: `${obj.color}`}}/>
                                }}
                            </Motion>
                    })
                }
                <FloatButton icon={!this.state.menuState ? 'edit' : 'close'} onClick={this.handleClick} id='toggle'/>
            </div>
        )
    }
}

export default PanelMenu;
