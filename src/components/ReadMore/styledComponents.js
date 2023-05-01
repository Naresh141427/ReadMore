import styled from 'styled-components'

export const App = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Header = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 35px;
  text-align: center;
`

export const DescriptionText = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 25px;
  text-align: center;
`
export const Image = styled.img`
  height: 250px;
  width: 280px;

  border-radius: 10px;
`

export const Text = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 18px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ReadMoreButton = styled.div`
  color: #fff;
  font-family: 'Roboto';
  font-size: 15px;

  background-color: #1f81ff;
  border-radius: 10px;

  padding: 8px 16px;

  border: none;
  outline: none;
  cursor: pointer;
`
