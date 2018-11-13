import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import IconFB from '../images/icon-fb.svg';
import IconTW from '../images/icon-tw.svg';
import IconIG from '../images/icon-ig.svg';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: block;
  margin-left: 10px;
  width: 20%;
  max-width: 35px;
`;

const Header = () => (
  <StyledHeader>
    <StyledLink to="/">
      <img src={Logo} alt="emarosa" />
    </StyledLink>
    <Socials>
      <SocialLink href="https://www.facebook.com/emarosa" target="_blank"><img src={IconFB} alt="facebook" /></SocialLink>
      <SocialLink href="https://www.twitter.com/emarosa" target="_blank"><img src={IconTW} alt="twitter" /></SocialLink>
      <SocialLink href="https://www.instagram.com/emarosa" target="_blank"><img src={IconIG} alt="instagram" /></SocialLink>
    </Socials>
  </StyledHeader>
);

export default Header;
