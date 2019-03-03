import React, { Component, Fragment } from 'react';
import {
  LogoContainer,
  LogoImg,
  CompanyName,
  Buttons,
  Button,
  Thinking
} from './elements';
import img from 'static/money.gif';
const image = require(`../../static/logos/${parseInt(Math.random() * 15)}.svg`);

class Logo extends Component {
  state = {
    show: true
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ show: false });
    }, 4000);
  };

  render() {
    const { changeSlide } = this.props;
    const { show } = this.state;

    return (
      <LogoContainer show={show}>
        {show ? (
          <Fragment>
            <Thinking src={img} />
            <p>Estamos creando un logo mamalon para que ganes el concurso</p>
          </Fragment>
        ) : (
          <Fragment>
            <LogoImg src={image} />
            <CompanyName>Nombre</CompanyName>
            <Buttons>
              <Button onClick={() => changeSlide(1)}>Finalizar</Button>
            </Buttons>
          </Fragment>
        )}
      </LogoContainer>
    );
  }
}

export default Logo;
