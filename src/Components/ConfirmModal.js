import React from 'react';
import Modal from './Modal.js';
// example props format
// props = {
//     question: String,
//     parent: react component,
//     buttons: [
//         {
//             BUTTON_CLASS: String,
//             BUTTON_TEXT: String,
//             BUTTON_STACK: [function() {}]            
//         }
//     ]
// }

const ConfirmModal = (props) => {
    //returns a function that calls the functions in the array
    function onClick(arr) {
         function func(e) {
            arr.forEach((fn) => {
                fn()
            })
        };
        return func.bind(props.parent, arr);
    }
    let buttons = props.buttons.map(
        (obj) => {
            let click = onClick(obj.BUTTON_STACK);
            return <button key={obj.BUTTON_TEXT} className={obj.BUTTON_CLASS} onClick={click} >{obj.BUTTON_TEXT}</button>
        }
    )
    buttons = buttons.reverse()
    return <Modal 
            modalAttributes={{className: 'delete-img modal' }}
            modalContentAttributes={{className: 'modal-content'}} >
                <p className='modal-question'>{props.question}</p>
                <fieldset className='button-container'>
                    {buttons}
                </fieldset>
            </Modal>
}

export default ConfirmModal;