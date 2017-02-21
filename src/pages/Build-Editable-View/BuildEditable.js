import React from 'react';
import { observer } from 'mobx-react'
import './BuildEditable.scss';
import FloatButton from '../../Components/FloatButton.js';
// import store from './BuildEditableStore.js';

@observer
class BuildEditable extends React.Component {

  render() {
    const { title, gallery } = this.props.route.store;
    return (
      <div id='build-editable-wrapper'>
        <header id='build-header'>
          <h2  className='build-name'>title of build</h2>
          <div className="builders-div">
            <img className='builder' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg/800px-Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg' alt='builder name'/>
            <img className='builder' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Portrait_of_George_Washington-transparent.png/800px-Portrait_of_George_Washington-transparent.png' alt='builder name'/>
            <FloatButton id='add-builder' className='builder'/>
          </div>
          <i className="material-icons build-menu">more_vert</i>
        </header>
        <section id='gallery' className='panel'>
          <div className='fig-container'>
            {gallery.map((href) => {
              return (<figure key={href} className='gallery-fig' ><img src={href} alt='something'/><i className='material-icons close'>close</i></figure>)
            })}
            <FloatButton id='add-image' icon='edit' onClick={()=>{console.log('add img')} }/>
          </div>
        </section>
      </div>
    )
  }
}

export default BuildEditable;
