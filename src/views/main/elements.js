import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 25px;
  }
`;

const MainButton = styled.div`
  width: 500px;
  padding: 40px 0;
  background: #ff4c4c;
  color: #fff;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0.5px 2px 5px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  font-size: 1.5rem;
  &:hover {
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
  }
`;

const LogoImg = styled.img`
  height: 150px;
  width: auto;
  margin-bottom: 70px;
`;

const Licenciado = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 40px;
`;

export { MainContainer, MainButton, Licenciado, LogoImg };
