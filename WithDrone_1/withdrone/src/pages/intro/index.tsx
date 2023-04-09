import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import drone from "../../img/mavic3.jpg";
import logo from "../../img/logo.png";
import logo2 from "../../img/gamepad.png";
import logo3 from "../../img/elearning.png";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  //gap: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid #ccc;
`;

const Logo = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const MenuItem = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Main = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 3;
  margin-bottom: 1rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 200px;
`

const Image = styled.img`
  width: 80%;
  height: 30%;
  object-fit: cover;
  margin-bottom: 2rem;
`;

const Footer = styled.div`
  // display: flex;
  // flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  width: 75%;
`;

const Contact = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Info = styled.p`
  font-size: 1.2rem;
`;

const Email = styled.a`
  font-size: 1.2rem;
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SNS = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SNSIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

export default function Intro() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  return (
    <Containers>
      <Main>
        <Title>Welcome to Drone Company</Title>
        <InfoContainer>
          <Image src={drone} alt="Drone in Flight" />
          <Text>
            We are a leading provider of drone solutions for various industries
            including agriculture, construction, surveying, and more. Our advanced
            technology and expertise enable us to deliver high-quality and
            reliable services to our clients. 
            <br/>
            <br/>
            Our services include aerial photography and videography, mapping and
            surveying, crop scouting, infrastructure inspection, and more. We use
            state-of-the-art equipment and software to deliver accurate and
            detailed results that meet the specific needs of our clients.
          </Text>
        </InfoContainer>
        
      </Main>
      <Footer>
        <Contact>
          <Icon src={logo} alt="Phone Icon" />
          <Info>123-456-7890</Info>
        </Contact>
        <Contact>
          <Icon src={logo2} alt="Location Icon" />
          <Info>123 Main Street, Anytown USA</Info>
        </Contact>
        <Contact>
          <Icon src={logo3} alt="Email Icon" />
          <Email href="mailto:info@dronecompany.com">
            info@dronecompany.com
          </Email>
        </Contact>
      </Footer>
    </Containers>
  );
}
