import styled from "styled-components";

function Footer() {
  return (
    <FooterStyle>
      <p>copyright(c) 2024, Movie Movie</p>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  background-color: black;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: center;
`;

export default Footer;
