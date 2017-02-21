import React from 'react';

class FloatButton extends React.Component {

  render() {
    const {
      id = '',
      style={},
      className = '',
      onClick = (() => {}),
      icon = 'add'
    } = this.props;

    return (
      <button id={id} style={style} className={'float-button ' + className} onClick={onClick}>
        <i className="material-icons">{icon}</i>
      </button>
    )
  }
}

FloatButton.propTypes = {
  id: React.PropTypes.string,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  icon: React.PropTypes.string
}

export default FloatButton;
