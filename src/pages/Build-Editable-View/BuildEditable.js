import React from 'react';
import { observer } from 'mobx-react'
import './BuildEditable.scss';
import FloatButton from '../../Components/FloatButton.js';
// import store from './BuildEditableStore.js';

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
              return <img className='builder' key={builder.name} src={builder.thumb} alt={builder.name}/>
            })}
            <FloatButton id='add-builder' className='builder'/>
          </div>
          <i className="material-icons build-menu">more_vert</i>
        </header>
        <section id='gallery' className='panel'>
          <div className='fig-container'>
            {gallery.map((href) => {
              return (<figure key={href} className='gallery-fig' ><img src={href} alt='something'/><i className='material-icons close'>close</i></figure>)
            })}
            <div className='panel-options-div'>
              <FloatButton id='add-image' icon='add' onClick={()=>{console.log('add img')} }/>
              <FloatButton id='add-image' icon='close' onClick={()=>{console.log('add img')} }/>
              <FloatButton id='add-image' icon='delete' onClick={()=>{console.log('add img')} }/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default BuildEditable;
