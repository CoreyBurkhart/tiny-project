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
        //run functions in the props.function stack
        if(this.props.functions) {
            this.props.functions.forEach((fn) => {
                fn()
            })
        }
    }


    render() {
        return (
            <div className='panel-options-div'>
                {
                    this.props.buttons.map(({ 
                            inputElement,
                            icon,
                            id,
                            onClick,
                            color,
                            sp
                        }, i) => {
                            return <Motion 
                                        key={icon} 
                                        style={{x: this.state.menuState ? sp : spring(0, {stiffness: 1000, damping: 40})}} >
                                            {({ x }) => {
                                                return <FloatButton 
                                                    inputElement={inputElement} 
                                                    icon={icon} 
                                                    id={id || '' } 
                                                    onClick={onClick} 
                                                    style={{transform: `translate3d(${x}px, 0px, 0px)`, background: `${color}`}}/>
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
