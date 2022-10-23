import styled from 'styled-components'

export const NavbarMenu = styled.div`
  text-align: center;
  background-color: #ffbb98;
  padding: 0px;
  display: flex;
  align: center;
  margin: -20px;
  width: 120%;
  top: 0;
  justify-content: center;
  align-items: center;
  height: 80px;
  ${'' /* float: left; */}
`

export const NavbarButton = styled.a`
  border-radius: 25px;
  ${'' /* background-color: #FBE0C3; */}
  color: black;
  z-index: 999;
  align: center;
  margin: 30px;
  padding: 10px;

  &:hover {
    background: #fff;
    padding: 10px 15px;
    border: 3px solid lightblue;
    animation-duration: 3s;
    transition: all 0.2s ease-in-out;
  }
`

export const CreateButton = styled.a`
  border-radius: 25px;
  background-color: #fbe0c3;
  z-index: 999;
  align: center;
  margin: 20px;
  padding: 10px;
  border: 2px solid #F0FFFFF;

  &:hover {
    background: #fff;
    background: salmon;
    color: white;
    padding: 10px 20px;
    border: 3px solid violet;
    animation-duration: 3s;
    transition: all 0.2s ease-in-out;
  }
`

// hover : violet -> white
