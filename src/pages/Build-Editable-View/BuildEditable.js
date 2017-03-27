import React from 'react';
import { observer } from 'mobx-react'
import './BuildEditable.scss';
import { Title, Summary, Gallery, Diagram, Model } from './Components/ComponentIndex.js';

@observer
class BuildEditable extends React.Component {

    render() {
        return (
            <div id='build-editable-wrapper'>
                <Title store={this.props.route.store} />
                <Gallery store={this.props.route.store}/>
                <Summary store={this.props.route.store}/>
                <Diagram store={this.props.route.store}/>
                <Model store={this.props.route.store}/>
            </div>
        )
    }
}

export default BuildEditable;
