import React, { Component } from 'react';
import {
  DetailsContainer,
  MamadorTitle,
  MamadorDescription,
  TechList,
  TechItem,
  Buttons,
  Button
} from './elements';
import RoundCode from 'react-md-icon/dist/RoundCode';

class Details extends Component {
  componentDidMount = () => {
    const { setInit } = this.props;
    setInit(false);
  };

  render() {
    const { changeSlide, setInit } = this.props;
    return (
      <DetailsContainer>
        <MamadorTitle className="title">Titulo mamador</MamadorTitle>
        <MamadorDescription>
          Para "Inserte target" de la industria "Inserte industria", "Inserte
          nombre", es un "Inserte rollo mamador", nuestra solución utiliza:
        </MamadorDescription>
        <TechList>
          <TechItem>
            <RoundCode /> Tecnología mamadora 1
          </TechItem>
          <TechItem>
            <RoundCode />
            Tecnología mamadora 2
          </TechItem>
          <TechItem>
            <RoundCode />
            Tecnología mamadora 3
          </TechItem>
          <TechItem>
            <RoundCode />
            Tecnología mamadora 4
          </TechItem>
          <TechItem>
            <RoundCode />
            Tecnología mamadora 5
          </TechItem>
        </TechList>
        <MamadorDescription>
          Además, la ventaja competitiva reside en "Ventaja mamadora"
        </MamadorDescription>
        <Buttons>
          <Button
            onClick={() => {
              changeSlide(1);
              setInit(true);
            }}>
            Probar otra idea
          </Button>
          <Button>Generar logotipo</Button>
        </Buttons>
      </DetailsContainer>
    );
  }
}

export default Details;
