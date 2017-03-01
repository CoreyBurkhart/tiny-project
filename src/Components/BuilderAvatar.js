import React from 'react';
import { TweenMax } from 'gsap';


class BuilderAvatar extends React.Component {
  render() {
    const { builder } = this.props;
    return (
      <img className='builder' ref={img => this.img = img} key={builder.name} src={builder.thumb} alt={builder.name}/>
    )
  }
}

export default BuilderAvatar;
