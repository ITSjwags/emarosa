import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Background from './background';
import Header from './header';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    height: 100%;
    position: relative;
  }

  #___gatsby,
  #___gatsby > div{
    height: 100%;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 0 20px 40px 20px;
  text-align: center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Normalize />
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Emarosa' },
            { name: 'keywords', content: 'emarosa, peach club, band, music, rock, pop' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <BackgroundContainer>
          <Background />
        </BackgroundContainer>

        <Wrapper>
          <Header />

          <Content>
            {children}
          </Content>
        </Wrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
