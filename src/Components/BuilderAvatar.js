import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

class BuilderAvatar extends React.Component {

  componentWillEnter(callback) {

  }

  componentWillLeave(callback) {

  }



  render() {
    const { builder } = this.props;
    return (
      <img className='builder' key={builder.name} src={builder.thumb} alt={builder.name}/>
    )
  }
}

export default BuilderAvatar;
