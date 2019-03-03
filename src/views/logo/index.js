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

class Logo extends Component {
  state = {
    show: true
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ show: false });
    }, 4000);
  };

  capitalize = name => name.charAt(0).toUpperCase() + name.slice(1);

  render() {
    const { changeSlide, name } = this.props;
    const { show } = this.state;
    const image = require(`../../static/logos/${parseInt(
      Math.random() * 15
    )}.svg`);

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
            <CompanyName>{this.capitalize(name)}</CompanyName>
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
