import React from 'react';
import {observer} from 'mobx-react';
import FloatButton from '../../../Components/FloatButton.js';
import {TransitionMotion, spring} from 'react-motion';

@observer
class Gallery extends React.Component {
    // panelMenuButtons = [<FloatButton icon='add' style={{background: 'green'}}/>,
    //                     <FloatButton icon='delete' style={{background: 'red'}}/>,
    //                     <FloatButton icon='edit' style={{background: 'green'}}/>]
    state = {
        buttonInfo: [
            {
                key: 'add',
                color: 'green',
                style: {x: spring(10)}

            },
            {
                key: 'edit',
                color: 'blue',
                style: {x: spring(10)}
            }
        ]
    }
    panelMenuClick() {
        this.setState({
            buttonInfo: [
                {
                    key: 'add',
                    color: 'green',
                    style: {x: spring(10)}
                }
            ]
        })
    }



    willLeave() {
        return {x: spring(0)}
    }

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

                    <div className='panel-options-div'>
                        <TransitionMotion
                            willLeave={this.willLeave}
                            styles={this.state.buttonInfo.map((info) => {
                                    return {
                                        key: info.key,
                                        style: info.style
                                }})}>
                            {
                                (inf )=> {
                                    return (<div>
                                        {inf.map((config) => {
                                            return (<FloatButton
                                                key={Math.random().toString()}
                                                icon={config.icon}
                                                style={config.style}/>)
                                        })}
                                    </div>)
                                    }
                            }
                        </TransitionMotion>
                        <button onClick={this.panelMenuClick.bind(this)} >click</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Gallery;
