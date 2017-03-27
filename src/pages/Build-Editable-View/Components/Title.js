import React, { Component } from 'react';
import FloatButton from '../../../Components/FloatButton.js';
import Builders from '../../../Components/Builders.js';
import _ from 'lodash';

class Title extends Component {
    state = {
        edit: false,
        context_visibility: false
    }
    ENTER_KEY = 13;

    componentWillMount() {
        document.addEventListener('click', this.hideContext.bind(this))
    }
    componentWillUnMount() {
        document.removeEventListener('click', this.hideContext)
    }
    edit() {
        this.setState({edit: true})
    }
    showContext() {
        this.setState({context_visibility: true})
    }
    hideContext() {
        this.setState({context_visibility: false})
    }
    onEnter(e) {
        console.log(e.keyCode)
        if(e.keyCode === this.ENTER_KEY) {
            this.props.store.updateTitle(this.input.value)
            this.setState({edit: false})        
        }
    }
    save() {
        this.props.store.updateTitle(this.input.value);
        this.setState({edit: false})
    }
    render() {
        const { title } = this.props.store;
        return (
            <header id='build-header'>
                <h2 
                    className='build-name'
                    style={{display: this.state.edit ? 'none' : 'block'}}
                    onClick={this.edit.bind(this)} >
                    {title}
                </h2>
                <input 
                defaultValue={title}
                onBlur={this.save.bind(this)}
                onKeyUp={this.onEnter.bind(this)}
                ref={inp => this.input = inp}
                style={{display: this.state.edit ? 'block' : 'none'}} />
                    <Builders store={this.props.store} />
                <i 
                onClick={this.showContext.bind(this)}
                className="material-icons build-menu">more_vert</i>
                <ul 
                className='vert-menu'
                style={{display: this.state.context_visibility ? 'block': 'none'}}>
                    <li>
                        <span className="context-link">
                            <i className='material-icons'>person_add</i>
                            <span>Add Builder</span>
                        </span>
                    </li>
                    <div className='divider' /> 
                    <li>
                        <span className="context-link">
                            <span><i className='material-icons'>visibility</i></span>
                            <span>Public View</span>
                        </span>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Title;