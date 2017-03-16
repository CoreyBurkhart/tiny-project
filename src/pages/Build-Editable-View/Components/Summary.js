import React from 'react';
import { observer } from 'mobx-react';
import { spring } from 'react-motion';
import PanelMenu from '../../../Components/PanelMenu.js';
import _ from 'lodash';
import Modal from '../../../Components/Modal.js';

@observer
class Summary extends React.Component {
  constructor() {
    super();
    this.showPreview = this.showPreview.bind(this)
    this.previous_md = null;
    this.state = {
      preview_visible: false
    }
    this.updateSummary = _.throttle(this.updateSummary.bind(this), 500);
    this.buttons = [
           {
                icon: 'visibility',
                onClick: this.showPreview,
                color: 'royalblue',
                sp: spring(-60, {stiffness: 750, damping: 40})
            }
            // {
            //     icon:  'add',
            //     inputElement: <input style={{display: 'none'}} multiple ref={(el => this.addImgInput = el)} type='file' />,
            //     onClick: this.addImg,
            //     color: 'green',
            //     sp: spring(60, {stiffness: 750, damping: 40})
            // }
        ];
  }

  componentWillMount() {
    this.previous_md = this.props.store.summary.markdown;
  }

  updateSummary(e) {
    //get the text
    //it has changed, set to unsaved
    this.props.store.setSummarySavedState(false);
    this.previous_md = this.summary.value;
    if(this.timerId) {
      window.clearTimeout(this.timerId);
    }
    //wait 2 seconds
    this.timerId = window.setTimeout(() => {
      if(this.previous_md === this.summary.value) {
        this.props.store.updateSummary(this.summary.value)
      }
    }, 2000) 
    // as long as it hasn't changed save the data
  }

  showPreview() {
    this.setState({preview_visible: true});
    this.preview = <Modal 
            modalAttributes={{className: 'modal' }}
            modalContentAttributes={{className: 'modal-content'}} >
                <div style={{width: '100%'}} 
                dangerouslySetInnerHTML={{__html: this.props.store.summaryHTML}}>
                  
                </div>
                <button onClick={this.dismissPreview.bind(this)}>dismiss</button>
            </Modal>
  }

  dismissPreview() {
    this.setState({preview_visible: false})
  }
  

  //onchange set the state to not-saved and  start a timer.
    // if they are still typing, cancel that timer and start a new one
    // if the timer goes off it should trigger get and save the computed markdown -> html
    // then set the state to saved
    
  render() {
    const { summary } = this.props.store;
    const saved = <span className='save'><i className='material-icons'>check</i>saved</span>;

    return (
      <section id='summary' className='panel'>
        {this.state.preview_visible && this.preview}
        <p className='summary-description'>
          <i className='material-icons info'>info</i> This is the part where you talk about you and you build. If you are making your build purchasable, here would be a great place to sell features and content!

          This summary utilizes markdown, allowing for detailed description and style. Learn more about it <a href='#' >here</a>.
        </p>
        <div className='divider'></div>
        <div className='summary-content'>
          <textarea 
            id='summary-input' 
            onChange={this.updateSummary}
            placeholder='Tell everybody about your awesome build!'
            defaultValue={summary.markdown} 
            ref={s => this.summary = s}/>
          
          {/* //saved indicator */}
          {summary.saved && saved}          
          {/* //link to markdown guide */}
          <a href='#' >Help</a>
        </div>
        <PanelMenu buttons={this.buttons} />
      </section>
    )
  }
}

export default Summary;
