import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 20px;
  font-size: 1.3rem;


`;

const MamadorTitle = styled.p`
  font-size: 2rem;
`;

const MamadorDescription = styled.p`
  margin: 0;
`;

const TechList = styled.div`
  margin: 30px 0;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  svg {
    color: #ff4c4c;
    font-size: 25px;
    margin-right: 20px;
  }
`;

const Buttons = styled.div`
  align-self: flex-end;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const Button = styled.div`
  padding: 10px;
  background: #ff4c4c;
  color: #fff;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0.5px 2px 5px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  font-size: 1rem;
  &:hover {
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
  }
`;

export {
  DetailsContainer,
  MamadorTitle,
  MamadorDescription,
  TechList,
  TechItem,
  Buttons,
  Button
};
