import React, { Component } from 'react';
import './App.css';

class MyButton extends Component {
  render() {
    return (
      <button>
         {this.props.buttonText}
      </button>
    );
  }
};

export default MyButton;