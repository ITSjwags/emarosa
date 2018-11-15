import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import FB from '../images/icon-fb';
import TW from '../images/icon-tw';
import IG from '../images/icon-ig';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 20px 20px 10px;
  position: relative;
  width: 100%;
  z-index: 1;

  @media (min-width: 640px) {
    padding: 40px 40px 40px 30px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  width: 40%;
  max-width: 150px;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const SocialLink = styled.a`
  color: white;
  display: block;
  margin-left: 10px;
  transition: all 250ms ease;
  width: 20%;
  max-width: 35px;

  > svg * {
    fill: currentColor;
  }

  &:hover {
    color: #ca4766;
  }
`;

const Header = () => (
  <StyledHeader>
    <StyledLink to="/">
      <img src={Logo} alt="emarosa" />
    </StyledLink>
    <Socials>
      <SocialLink href="https://www.facebook.com/emarosa" target="_blank"><FB /></SocialLink>
      <SocialLink href="https://www.twitter.com/emarosa" target="_blank"><TW /></SocialLink>
      <SocialLink href="https://www.instagram.com/emarosa" target="_blank"><IG /></SocialLink>
    </Socials>
  </StyledHeader>
);

export default Header;
