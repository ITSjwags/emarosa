import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/layout';

import posterSrc from '../images/tour-poster-web.jpg';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script
        charset="utf-8"
        src="https://widget.bandsintown.com/main.min.js"
      />
    </Helmet>
    <Content>
      <img src={posterSrc} alt="Emarosa Peach Club Tour" />
      <a
        className="bit-widget-initializer"
        data-artist-name="Emarosa"
        data-display-local-dates="true"
        data-display-past-dates="false"
        data-auto-style="false"
        data-text-color="#FFFFFF"
        data-link-color="#E63167"
        data-background-color="rgba(0,0,0,0)"
        data-display-limit="15"
        data-display-start-time="true"
        data-link-text-color="#FFFFFF"
        data-display-lineup="true"
        data-display-play-my-city="true"
        data-separator-color="rgba(124,124,124,0.25)"
        href="#asf"
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

  > img {
    display: block;
    margin-bottom: 10px;
    width: 100%;
  }
`;

export default IndexPage;
