import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/layout';
import Logo from '../components/Logo';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script
        charset="utf-8"
        src="https://widget.bandsintown.com/main.min.js"
      />
    </Helmet>
    <Content>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <a
        className="bit-widget-initializer"
        data-artist-name="Emarosa"
        data-display-local-dates="true"
        data-display-past-dates="false"
        data-auto-style="false"
        data-text-color="#FFFFFF"
        data-link-color="#E63167"
        data-background-color="rgba(0,0,0,0)"
        data-display-limit=""
        data-display-start-time="true"
        data-link-text-color="#FFFFFF"
        data-display-lineup="true"
        data-display-play-my-city="true"
        data-separator-color="rgba(124,124,124,0.25)"
        href="#tour"
      >
        &nbsp;
      </a>
    </Content>
  </Layout>
);

const Content = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 960px;
`;

const LogoContainer = styled.div`
  margin: 20px 10px;
`;

export default IndexPage;
