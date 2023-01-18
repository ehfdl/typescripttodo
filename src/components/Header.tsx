import styled from "styled-components";

const Header = () => {
  return <HeaderForm>TodoList</HeaderForm>;
};

export default Header;

const HeaderForm = styled.div`
  width: 100%;
  height: 150px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
`;
