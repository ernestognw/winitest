import React, { Component, Fragment } from 'react';
import Main from 'views/main';

class App extends Component {
  state = {
    slide: 1
  };

  render() {
    const { slide } = this.state;

    return <Fragment>{slide === 1 && <Main />}</Fragment>;
  }
}

export default App;
