import React, { Component, Fragment } from 'react';
import Main from 'views/main';
import Details from 'views/details';
import Logo from 'views/logo';

class App extends Component {
  state = {
    slide: 3,
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
        {slide === 3 && <Logo changeSlide={this.changeSlide} />}
      </Fragment>
    );
  }
}

export default App;
