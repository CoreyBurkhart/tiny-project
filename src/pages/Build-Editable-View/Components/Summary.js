import React from 'react';
import { observer } from 'mobx-react';
import FloatButton from '../../../Components/FloatButton.js';

@observer
class Summary extends React.Component {
  render() {
    const { summary } = this.props.store;

    return (
      <section id='summary' className='panel'>
        <p className='summary-description'>
          <i className='material-icons info'>info</i> This is the part where you talk about you and you build. If you are making your build purchasable, here would be a great place to sell features and content!

          This summary utilizes markdown, allowing for detailed description and style. Learn more about it <a href='#' >here</a>.
        </p>
        <div className='divider'></div>
        <div className='summary-content'>
          <textarea id='summary-input' placeholder='Tell everybody about your awesome build!' defaultValue={summary}/>
          {/* //saved indicator */}
          <span className='save'><i className='material-icons'>check</i>saved</span>
          {/* //link to markdown guide */}
          <a href='#' >Help</a>
        </div>
        <div className='panel-options-div'>
          {/* <FloatButton id='add-image' icon='visibility' style={{background: 'green'}} /> */}
          <FloatButton id='add-image' icon='edit' />
          {/* <FloatButton id='add-image' icon=''  style={{background: 'red'}} /> */}
        </div>
      </section>
    )
  }
}

export default Summary;
