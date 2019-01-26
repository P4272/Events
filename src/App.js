import React, { Component } from 'react';
import logo from './logo.svg';
import { css, cx } from "emotion";

import Modal from "./Modal.js";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openModal()}>Open modal</button>
        
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}/>
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}

export default App;
