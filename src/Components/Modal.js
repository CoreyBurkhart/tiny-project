import React from 'react';
import _ from 'lodash';
const Modal = (props) => {
    return (
        <div {...props.modalAttributes}>
            <div {...props.modalContentAttributes}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;