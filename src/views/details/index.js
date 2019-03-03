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

  capitalize = name => name.charAt(0).toUpperCase() + name.slice(1);

  render() {
    const {
      changeSlide,
      problem,
      problemComplement,
      profile,
      industry,
      technologies,
      category,
      advantage,
      name,
      refetchIdea
    } = this.props;
    return (
      <DetailsContainer>
        <MamadorTitle className="title">{this.capitalize(name)}</MamadorTitle>
        <MamadorDescription>
          Para {`${profile} de la industria ${industry}`}, que {problem}, {name}{' '}
          es {category} que {problemComplement}. Nuestra solución utiliza:
        </MamadorDescription>
        <TechList>
          {technologies.map((technology, id) => (
            <TechItem key={id}>
              <RoundCode /> {technology.content}
            </TechItem>
          ))}
        </TechList>
        <MamadorDescription>Además de que {advantage}</MamadorDescription>
        <Buttons>
          <Button
            onClick={() => {
              changeSlide(1);
              refetchIdea();
            }}>
            Probar otra idea
          </Button>
          <Button onClick={() => changeSlide(3)}>Generar logotipo</Button>
        </Buttons>
      </DetailsContainer>
    );
  }
}

export default Details;
