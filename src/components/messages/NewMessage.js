import React, { Component } from "react";

export default class NewMessage extends Component {
    
    // Set initial state
    state = {
        meessage: ""
    }

// Change state when editing input field
    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        console.log(stateToChange)
        this.setState(stateToChange);
      };


      



}