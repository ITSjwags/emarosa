import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
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
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

const Content = styled.main`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 20px 80px 20px;
  width: 100%;
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
