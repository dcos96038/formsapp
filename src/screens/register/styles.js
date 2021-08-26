import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 400px;
  height: 75vh;
  border-radius: 10px;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 5px 5px grey;
`;

export const Title = styled.h1`
  color: #39509b;
`;

export const Subtitle = styled.h3`
  color: white;
  width: 200px;
  background: rgba(0, 0, 0, 55%);
  border-radius: 30px;
  margin-bottom: 20px;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
  width: 350px;
`;

export const Button = styled.button`
  color: white;
  width: 150px;
  height: 35px;
  background: rgba(0, 0, 0, 55%);
  border-radius: 30px;
  border: none;
  &:hover {
    background-color: grey;
    color: black;
  }
`;

export const ContainerInput = styled.div`
  height: 75px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledInput = styled.input`
  border-radius: 30px;
  height: 20px;
  width: 270px;
  border: none;
  padding: 10px;
`;

export const Error = styled.p`
  color: red;
  padding-left: 10px;
  margin: 0;
`;
