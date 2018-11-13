import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Poster from '../images/poster.jpg';

const Content = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
`;

const Video = styled.div`
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

const IndexPage = () => (
  <Layout>
    <Content>
      <Video>
        <iframe
          width="560"
          height="315"
          title="peach club video"
          poster={Poster}
          src="https://www.youtube.com/embed/Rk_sAHh9s08"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Video>
    </Content>
  </Layout>
);

export default IndexPage;
