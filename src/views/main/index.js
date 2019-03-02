import React, { Component, Fragment } from 'react';
import Layout from 'components/layout';
import { MainContainer, MainButton, Licenciado } from './elements';
import licenciadoImg from 'static/licenciado.gif';

class Main extends Component {
  state = {
    loading: false
  };

  handleClick = () => {
    this.setState({ loading: true });
  };

  render() {
    const { loading } = this.state;
    return (
      <Layout>
        <MainContainer>
          {loading === false && (
            <MainButton onClick={this.handleClick}>
              Haz click aquí para ganar un concurso
            </MainButton>
          )}
          {loading && (
            <Fragment>
              <Licenciado src={licenciadoImg} />
              <p>Espera un momento, un licenciado está</p>
            </Fragment>
          )}
        </MainContainer>
      </Layout>
    );
  }
}

export default Main;
