import React from 'react';
import { observer } from 'mobx-react'
import './BuildEditable.scss';
import BuilderAvatar from '../../Components/BuilderAvatar.js';
// import store from './BuildEditableStore.js';
import TransitionGroup from 'react-addons-transition-group';
import { Summary, Gallery } from './Components/ComponentIndex.js';
import FloatButton from '../../Components/FloatButton.js';


// @observer
class BuildEditable extends React.Component {

  render() {
    const { title, builders, gallery } = this.props.route.store;
    return (
      <div id='build-editable-wrapper'>
        <header id='build-header'>
          <h2  className='build-name'>title of build</h2>
          <div className="builders-div">
            {builders.map((builder) => {
              return <BuilderAvatar  key={builder.name} builder={builder} />
            })}
            <FloatButton id='add-builder' className='builder'/>
          </div>
          <i className="material-icons build-menu">more_vert</i>
        </header>
        <Gallery store={this.props.route.store} />
        <Summary store={this.props.route.store} />
      </div>
    )
  }
}

export default BuildEditable;
