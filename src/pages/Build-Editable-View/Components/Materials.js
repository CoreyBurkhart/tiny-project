import React, { Component } from 'react';
import PanelMenu from '../../../Components/PanelMenu.js';
import { observer } from 'mobx-react';

@observer
class Materials extends Component {
    constructor() {
        super()
        this.state = {
            editing: false
        }
    }
    //buttons (NOT INHERITED)
        // add from pinterest?
        // search for materials(link to materials market)
        // add from url

    //create and expose validation rules
    //add an item
    //get user input
        // returns validated info formatted for saving
    //remove an item
    //toggle edit mode
    //dismiss edit mode
    //update an item


    // information to collect
        // name: required* 
        // cost per unit: price *
        // quantity *
        // What part of the house is it for? * 
        // Notes / description 

    render() {
        return (
            <section id='materials' className='panel'>
                <h2>Materials</h2>
                <fieldset id='new-material'>
                    <label htmlFor='material'>Material</label>
                    <input type='text' id='material' name='material' placeholder='eg. Nails' required/>
                    <label htmlFor='cost'>$ each</label>
                    <input type='text' id='cost' name='cost' placeholder='$32' required/>
                    <label htmlFor='quantity'>Quantity</label>                    
                    <input type='text' id='quantity' name='quantity' placeholder='32' required/>
                    <select defaultValue='Choose' >
                            <option value='Choose'>Choose</option>
                            <option value='Base'>Base</option>
                            <option value='Roof'>Roof</option>
                            <option value='Interior'>Interior</option>
                            <option value='Walls'>Walls</option>
                            <option value='Exterior'>Exterior</option>
                    </select>
                    <textarea placeholder='More detail about this item'/>
                </fieldset>
            {/*<PanelMenu buttons={this.buttons} functions={[this.toggleEditState]}/>*/}
            </section>
        )
    }
}

export default Materials;