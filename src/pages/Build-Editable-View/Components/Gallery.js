import React from 'react';
import { observer } from 'mobx-react';
import FloatButton from '../../../Components/FloatButton.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
              <FloatButton icon='add' style={{background: 'green'}} />
              <FloatButton icon='close' />
              <FloatButton icon='delete' style={{background: 'red'}} />
              <FloatButton icon='edit' style={{background: 'green'}} />
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery;
