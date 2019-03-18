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
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    font-display: auto;
    position: relative;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Content = styled.main`
  padding: 0 0 40px 0;
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
