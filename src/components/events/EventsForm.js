import React, { Component } from 'react'
import "./evnts.css"

export default class EventsForm extends Component {
    // Set initial state
    state = {
      title: "",
      location: "",
      date: ""
    };

    // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    console.log(stateToChange)
    this.setState(stateToChange);
  };
  
  }
