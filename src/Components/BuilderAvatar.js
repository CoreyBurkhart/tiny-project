import React from 'react';
import { TweenMax } from 'gsap';

class BuilderAvatar extends React.Component {

  componentWillEnter(callback) {
    TweenMax.fromTo(this.img, 0.7, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave(callback) {
    TweenMax.fromTo(this.img, 0.7, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }



  render() {
    const { builder } = this.props;
    console.log(TweenMax.fromTo);
    return (
        <img className='builder' ref={img => this.img = img} key={builder.name} src={builder.thumb} alt={builder.name}/>
    )
  }
}

export default BuilderAvatar;
