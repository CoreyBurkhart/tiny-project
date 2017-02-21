import React from 'react';
import { observer } from 'mobx-react'
import './BuildEditable.scss';
import FloatButton from '../../Components/FloatButton.js';
import BuilderAvatar from '../../Components/BuilderAvatar.js';
// import store from './BuildEditableStore.js';
import TransitionGroup from 'react-addons-transition-group';
import Summary from './Components/Summary.js';


@observer
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
        <section id='gallery' className='panel'>
          <div className='fig-container'>
            {gallery.map((href) => {
              return (<figure key={href} className='gallery-fig' >
                <img src={href} alt='something'/>
                <input className='delete-box' type='checkbox' />
              </figure>)
            })}
            <div className='panel-options-div'>
              <FloatButton id='add-image' icon='add' style={{background: 'green'}} />
              <FloatButton id='add-image' icon='close' />
              <FloatButton id='add-image' icon='delete'  style={{background: 'red'}} />
            </div>
          </div>
        </section>
        <Summary store={this.props.route.store} />
      </div>
    )
  }
}

export default BuildEditable;
