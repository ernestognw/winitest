import React, { Component, Fragment } from 'react';
import Layout from 'components/layout';
import { MainContainer, MainButton, Licenciado, LogoImg } from './elements';
import licenciadoImg from 'static/licenciado.gif';
import logoImg from 'static/logo-original.svg';

class Main extends Component {
  componentDidMount = () => {
    const { init, changeSlide } = this.props;
    init &&
      setTimeout(() => {
        changeSlide(2);
      }, 3000);
  };

  handleClick = () => {
    const { changeSlide, setInit } = this.props;
    setInit(true);
    setTimeout(() => {
      changeSlide(2);
    }, 3000);
  };

  render() {
    const { init } = this.props;

    return (
      <Layout>
        <MainContainer>
          {init === false && (
            <Fragment>
              <LogoImg src={logoImg} />
              <MainButton onClick={this.handleClick} className="title">
                Haz click aquí para ganar un concurso
              </MainButton>
            </Fragment>
          )}
          {init && (
            <Fragment>
              <Licenciado src={licenciadoImg} />
              <p>Espera un momento, un licenciado está pensando en una idea</p>
            </Fragment>
          )}
        </MainContainer>
      </Layout>
    );
  }
}

export default Main;
