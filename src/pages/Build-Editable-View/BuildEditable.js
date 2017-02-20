import React from 'react';
import { observer } from 'mobx-react'
import './BuildEditable.scss';
// import store from './BuildEditableStore.js';

@observer
class BuildEditable extends React.Component {

  render() {
    const { title, gallery } = this.props.route.store;
    return (
      <div id='build-editable-wrapper'>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <div className="mdl-layout-spacer"></div>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
        <label className="mdl-button mdl-js-button mdl-button--icon"
               htmlFor="fixed-header-drawer-exp">
          <i className="material-icons">search</i>
        </label>
        <div className="mdl-textfield__expandable-holder">
          <input className="mdl-textfield__input" type="text" name="sample"
                 id="fixed-header-drawer-exp"/>
        </div>
      </div>
    </div>
  </header>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Title</span>
    <nav className="mdl-navigation">
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
    </nav>
  </div>
  <main className="mdl-layout__content">
    <div className="page-content">Title of build</div>
  </main>
</div>
        <section id='gallery' className='panel'>
          <div className="panel-heading">
            <h2 className='panel-title'>Gallery</h2>
            <i className="material-icons menu">more_vert</i>
          </div>
          <div className='fig-container'>
            {gallery.map((href) => {
              return (<figure key={href} className='gallery-fig' ><img src={href} alt='something'/></figure>)
            })}
          </div>
          <button className='add-to-panel-btn' onClick={()=>{console.log('add img');}}>
            <i className="material-icons">add</i>
            <sub>Add Image</sub>
          </button>
        </section>
      </div>
    )
  }
}

export default BuildEditable;
