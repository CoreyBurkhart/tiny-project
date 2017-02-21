import React from 'react';

class Summary extends React.Component {
  render() {
    return (
      <section id='summary' className='panel'>
        <div className='summary-content'>
          <textarea id='summary-input'/>
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
