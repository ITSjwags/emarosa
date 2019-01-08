import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Content = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

const Videos = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;

  @media(min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: initial;
  }
`;

const Video = styled.div`
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;

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
  border: 2px solid white;
  color: #ca4766;
  display: inline-block;
  font-style: italic;
  font-weight: bold;
  margin-top: 40px;
  padding: 15px 30px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 250ms ease;

  &:hover {
    background: #ca4766;
    border-color: white;
    color: white;
  }
`;

const IndexPage = () => (
  <Layout>
    <Content>
      <Videos>
        <Video>
          <iframe
            width="560"
            height="315"
            title="peach club - givin up video"
            src="https://www.youtube.com/embed/Shmt5YnF40A?modestbranding=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Video>
        <Video>
          <iframe
            width="560"
            height="315"
            title="131 - cloud 9 video"
            src="https://www.youtube.com/embed/aaH3ud1utB0?modestbranding=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Video>
      </Videos>

      <Preorder href="http://smarturl.it/emarosamerch" target="_blank">
        Pre-Order Album
      </Preorder>
    </Content>
  </Layout>
);

export default IndexPage;
