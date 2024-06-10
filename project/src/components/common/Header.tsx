import styled from "styled-components";

function Header() {
  return <HeaderStyle>MovieMovie</HeaderStyle>;
}

const HeaderStyle = styled.header`
  background-color: rgb(196, 14, 14);
  padding: 20px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100;
`;

export default Header;
