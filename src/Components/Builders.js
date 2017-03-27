import React, { Component } from 'react';
import FloatButton from './FloatButton.js';
import BuilderAvatar from './BuilderAvatar.js';

class Builders extends Component {
    Builders() {
        const { builders } = this.props.store;
        let builder_thumbs = builders.map((builder) => {
            return <BuilderAvatar key={builder.name} builder={builder}/>
        })
        return builder_thumbs;
    }

    addBuilder() {}


    render() {
        return (
            <div className="builders-div">
                {this.Builders()}
            </div>
        )             
    }
}

export default Builders;