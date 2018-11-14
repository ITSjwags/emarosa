import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Normalize } from 'styled-normalize';
import LogoSrc from '../images/logo.svg';

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

const Content = styled.main`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding: 80px 20px;
  text-align: center;
`;

const Logo = styled.img`
  max-width: 250px;
`;

class Layout extends Component {
  componentDidMount() {
    // make sure height is 100vh even in mobile safari
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render() {
    return (
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

            <Content>
              <Logo src={LogoSrc} alt="Emarosa" />
              <p>11•15•18</p>
            </Content>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
