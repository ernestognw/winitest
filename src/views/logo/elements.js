import styled from 'styled-components';

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 70px 200px;
  padding-top: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 25px;
  }
  ${props =>
    props.show &&
    `
    padding: 0;
    width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `}
`;

const LogoImg = styled.img`
  height: 200px;
  width: auto;
`;

const CompanyName = styled.div`
  font-size: 1.7rem;
  margin-top: 30px;
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

const Thinking = styled.img`
  height: 250px;
  width: auto;
  margin-bottom: 40px;
`;

export { LogoContainer, LogoImg, CompanyName, Button, Buttons, Thinking };
