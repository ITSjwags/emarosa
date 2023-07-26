import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTshirt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import Layout from '../components/layout';
import Hero from '../components/hero';

export default function IndexPage() {
  const socialLinks = [
    {
      icon: FaInstagram,
      url: 'http://www.instagram.com/emarosa',
    },
    {
      icon: FaTiktok,
      url: 'http://www.tiktok.com/emarosaband',
    },
    {
      icon: FaFacebookF,
      url: 'https://www.facebook.com/emarosa',
    },
    {
      icon: FaYoutube,
      url: 'https://youtube.com/@EmarosaTV',
    },
    {
      icon: FaTwitter,
      url: 'http://www.twitter.com/emarosa',
    },
    {
      icon: FaTshirt,
      url: 'https://downrightmerch.com/collections/emarosa',
    },
  ] as const;

  return (
    <Layout>
      <Helmet>
        <script src="https://widget.bandsintown.com/main.min.js" />
      </Helmet>
      <Content>
        <HeroContainer>
          <Hero />
        </HeroContainer>
        <a
          className="bit-widget-initializer"
          data-artist-name="Emarosa"
          data-auto-style="false"
          data-background-color="black"
          data-display-limit=""
          data-display-lineup="true"
          data-display-local-dates="true"
          data-display-past-dates="false"
          data-display-play-my-city="true"
          data-display-start-time="true"
          data-font="Bebas Neue"
          data-link-color="#EAA53C"
          data-link-text-color="black"
          data-separator-color="#BA342C"
          data-text-color="#FFFFFF"
          href="#tour"
        >
          &nbsp;
        </a>

        <Socials>
          {socialLinks.map((social, index) => {
            return (
              <SocialLink href={social.url} key={index}>
                <social.icon size={24} />
              </SocialLink>
            );
          })}
        </Socials>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  padding-bottom: 20px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 768px;

  & .bit-widget {
    font-size: 22px;

    .bit-top-track-button,
    .bit-event-list-title {
      font-size: 18px;
    }
  }

  & .bit-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const HeroContainer = styled.div`
  margin: 20px 10px 60px;
`;

const Socials = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 40px 20px 20px;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #408074;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
