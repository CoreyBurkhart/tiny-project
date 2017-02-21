import React from 'react';
import { observer } from 'mobx-react';

@observer
class Summary extends React.Component {
  render() {
    const { summary } = this.props.store;

    return (
      <section id='summary' className='panel'>
        <div className='summary-content'>
          <textarea id='summary-input' placeholder='Tell everybody about your awesome build!' defaultValue={summary}/>
          {/* //saved indicator */}
          <span><i className='material-icons'>check</i>saved</span>
          {/* //link to markdown guide */}
          <a href='#' >Help</a>
        </div>
      </section>
    )
  }
}

export default Summary;
