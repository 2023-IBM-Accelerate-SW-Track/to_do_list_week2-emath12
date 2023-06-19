import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import {useState} from 'react'

function AddTodo(props) {
  // Create a local react state of the this component with a content property set to nothing.
  const [state, setState] = useState({
      content: "",
      date : ""
  })
  
  // constructor() {
  //   super();
  //   this.state = {
  //     content: "",
  //     date : ""
  //   };
  // }

  // The handleChange function updates the react state with the new input value provided from the user.
  // "event" is the defined action a user takes. In this case, the event is triggered when the user types something
  // into the text field.
  function handleChange(event) {
    setState({
      content: event.target.value,
      date : Date().toLocaleString('en-US'),
    });
  };
  // The handleSubmit function collects the forms input and puts it into the react state.
  // event.preventDefault() is called to prevents default event behavior like refreshing the browser.
  // this.props.addTodo(this.state) passes the current state (or user input) into the addTodo function defined
  // in the Home.js file which then adds the input into the list.
  function handleSubmit(event) {
    event.preventDefault();
    if (state.content.trim()) {
      props.addTodo(state);
      setState({
        content: "",
        date : ""
      });
    }
  };

    return (
      // 1. When rendering a component, you can render as many elements as you like as long as it is wrapped inside
      // one div element.
      // 2. The return statement should include a text field input with the handleChange function from above that
      // is passed into an onChange event.
      // 3. The return should also include a button with the handleSubmit function from above that is passed into
      // an OnClick event.
      // 4. The value of the text field also should reflect the local state of this component.
      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={handleChange}
          value={state.content}
        />
        <Button
          style={{ marginLeft: "10px" }}
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    );
  }


export default AddTodo;
