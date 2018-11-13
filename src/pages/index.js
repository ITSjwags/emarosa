import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

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

const Preorder = styled.a`
  background: white;
  border-radius: 30px;
  color: #AA405C;
  display: inline-block;
  font-style: italic;
  font-weight: bold;
  margin-top: 40px;
  padding: 15px 30px;
  text-decoration: none;
  text-transform: uppercase;
`;

const IndexPage = () => (
  <Layout>
    <Content>
      <Video>
        <iframe
          width="560"
          height="315"
          title="peach club video"
          src="https://www.youtube.com/embed/Rk_sAHh9s08?modestbranding=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Video>

      <Preorder href="#">
        Pre-Order Album
      </Preorder>
    </Content>
  </Layout>
);

export default IndexPage;
