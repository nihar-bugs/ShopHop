import {
  Facebook,
  Instagram,
  Twitter,
  Place,
  LocalPhone,
  EmailOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 30vh;
`;
const Left = styled.div`
  width: 50%;
  background-color: #f7fff7;
  margin-bottom: 20px;
`;
const Right = styled.div`
  width: 50%;
  background-color: #f7fff7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  flex: 1;
  letter-spacing: 10px;
  font-weight: bolder;
  text-align: center;
  color: black;
  font-style: italic;
`;
const Desc = styled.p`
  flex: 2;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 2px;
  text-align: center;
`;
const SocialMedia = styled.div`
  text-align: center;
  justify-content: space-between;
  flex: 1;
`;

const ContactUs = styled.h1`
  flex: 1;
  letter-spacing: 10px;
  font-weight: bold;
  font-style: italic;
`;
const Address = styled.address`
  flex: 1;
  margin-right: -30px;
  display: flex;
  align-items: center;
`;
const Phone = styled.div`
  flex: 1;
  margin-right: 60px;
  display: flex;
  margin-bottom: 30px;
`;
const Email = styled.div`
  flex: 1;
  margin-right: 20px;
  margin-top: -20px;
  display: flex;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>SHOPHOP</Title>
        <Desc>
          <p>
            Welcome Shopoholics!!
            <br /> One stop for all your shopping needs!!
            <br /> Don't Hop Shops. Just SHOPHOP!!!
          </p>
        </Desc>
        <SocialMedia>
          <Instagram color="secondary" fontSize="large" />
          <Twitter color="primary" fontSize="large" />
          <Facebook color="primary" fontSize="large" />
        </SocialMedia>
      </Left>
      <Right>
        <ContactUs>Contact</ContactUs>
        <Address>
          <Place />
          420, Galaxy Square, Ahmedabad - 380015
        </Address>
        <Phone>
          <LocalPhone />
          <p style={{ "letter-spacing": "2px" }}>+ 91-1234987605</p>
        </Phone>
        <Email>
          <EmailOutlined />{" "}
          <p style={{ "letter-spacing": "2px" }}>contact@shophop.com</p>
        </Email>
      </Right>
    </Container>
  );
};

export default Footer;
