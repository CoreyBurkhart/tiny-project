import React from 'react';

class FloatButton extends React.Component {

  render() {
    // const { ...args } = this.props
    const className = this.props.className || 'float-button ';
    const onClick = this.props.onClick || (() => {});
    const icon = this.props.icon || 'add';
    const id = this.props.id || '';

    return (
      <button id={id} className={'float-button ' + className} onClick={onClick}>
        <i className="material-icons">{icon}</i>
      </button>
    )
  }
}

export default FloatButton;
