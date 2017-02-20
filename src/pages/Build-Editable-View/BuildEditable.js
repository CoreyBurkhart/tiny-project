import React from 'react';
import { observer } from 'mobx-react'
import './BuildEditable.scss';
// import store from './BuildEditableStore.js';

@observer
class BuildEditable extends React.Component {

  render() {
    const { title, gallery } = this.props.route.store;
    return (
      <div id='build-editable-wrapper'>
        <header id='build-header'>
          <h2  className='build-name'>title of build</h2>
          <i className="material-icons build-menu">more_vert</i>
        </header>
        <section id='gallery' className='panel'>
          <div className='fig-container'>
            {gallery.map((href) => {
              return (<figure key={href} className='gallery-fig' ><img src={href} alt='something'/><i className='material-icons close'>close</i></figure>)
            })}
          </div>
          <button className='add-to-panel-btn' onClick={()=>{console.log('add img');}}>
            <i className="material-icons">add</i>
          </button>
        </section>
      </div>
    )
  }
}

export default BuildEditable;
