import React, { Component, Fragment } from 'react';
import Main from 'views/main';
import Details from 'views/details';

class App extends Component {
  state = {
    slide: 1,
    init: false
  };

  changeSlide = slide => this.setState({ slide });
  setInit = init => this.setState({ init });

  render() {
    const { slide, init } = this.state;
    return (
      <Fragment>
        {slide === 1 && (
          <Main
            changeSlide={this.changeSlide}
            setInit={this.setInit}
            init={init}
          />
        )}
        {slide === 2 && (
          <Details changeSlide={this.changeSlide} setInit={this.setInit} />
        )}
      </Fragment>
    );
  }
}

export default App;
