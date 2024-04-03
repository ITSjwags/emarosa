import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
// import { FaTshirt } from 'react-icons/fa';

import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

export default function IndexPage() {
  const socialLinks = [
    {
      icon: FaSpotify,
      url: 'https://open.spotify.com/artist/68tKVjVvcqUfKFFLr2j0Ek',
    },
    {
      icon: FaApple,
      url: 'https://music.apple.com/us/artist/emarosa/252144676',
    },
    {
      icon: FaInstagram,
      url: 'http://www.instagram.com/emarosa',
    },
    {
      icon: FaFacebookF,
      url: 'https://www.facebook.com/emarosa',
    },
    {
      icon: FaXTwitter,
      url: 'http://www.x.com/emarosa',
    },
    {
      icon: FaTiktok,
      url: 'http://www.tiktok.com/emarosaband',
    },
    {
      icon: FaYoutube,
      url: 'https://youtube.com/@EmarosaTV',
    },
    // {
    //   icon: FaTshirt,
    //   url: 'https://downrightmerch.com/collections/emarosa',
    // },
  ] as const;

  return (
    <Layout>
      <Helmet>
        <script src="https://widget.bandsintown.com/main.min.js" />
      </Helmet>

      <HeroContainer>
        <StaticImage
          src="../images/hero.jpg"
          alt="emarosa band memebers sitting on a couch"
          placeholder="dominantColor"
          layout="constrained"
          quality={100}
        />
      </HeroContainer>

      <LogoContainer>
        <StaticImage
          src="../images/logo.png"
          alt="emarosa logo"
          placeholder="none"
          layout="constrained"
          quality={100}
        />
      </LogoContainer>

      <Content>
        {/* <div
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
        /> */}

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

const HeroContainer = styled.section`
  margin-inline: auto;
  overflow: hidden;
  position: relative;
  margin-bottom: -80px;

  &::after {
    background: linear-gradient(
      rgba(18, 18, 18, 0) 0%,
      rgba(18, 18, 18, 0.78) 51.04%,
      rgb(18, 18, 18) 100%
    );
    content: '';
    width: 100%;
    height: 144px;
    position: absolute;
    bottom: -1px;
    left: 0;
  }

  @media (min-width: 640px) {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    margin-top: 20px;
    max-width: 640px;
  }
`;

const LogoContainer = styled.div`
  margin-inline: auto;
  max-width: 360px;
`;

const Content = styled.section`
  padding-bottom: 20px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 960px;

  & .bit-widget {
    font-size: 22px;

    .bit-top-track-button,
    .bit-event-list-title {
      font-size: 18px;
    }

    .bit-top-track-button {
      margin-bottom: 20px;
    }
  }

  & .bit-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Socials = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
`;

const SocialLink = styled.a`
  color: white;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
