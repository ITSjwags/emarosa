import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

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
            {
              name: 'keywords',
              content: 'emarosa, peach club, band, music, rock, pop',
            },
          ]}
        >
          <html lang="en" />
          <script
            charset="utf-8"
            src="https://widget.bandsintown.com/main.min.js"
          />
        </Helmet>

        <Wrapper>
          <Content>{children}</Content>
        </Wrapper>
      </>
    )}
  />
);

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: black;
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    font-display: auto;
    position: relative;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Content = styled.main`
  text-align: center;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
