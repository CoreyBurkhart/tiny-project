import React from 'react';
import { observer } from 'mobx-react';
import FloatButton from '../../../Components/FloatButton.js';

@observer
class Gallery extends React.Component {
  render() {
    const { gallery } = this.props.store;

    return (
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
    )
  }
}

export default Gallery;
