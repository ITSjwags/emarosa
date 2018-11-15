import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import debounce from 'lodash.debounce';
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
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: calc(var(--minHeight, 1vh) * 100);
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 0 20px 40px 20px;
  text-align: center;
`;

class Layout extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.content = React.createRef();
  }
  componentDidMount() {
    this.getHeight();
    window.addEventListener('resize', debounce(this.getHeight, 200));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getHeight);
  }

  getHeight = () => {
    // make sure height is 100vh even in mobile safari
    const vh = window.innerHeight * 0.01;
    const minHeight = (this.header.current.clientHeight + this.content.current.children[0].clientHeight + 40) * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--minHeight', `${minHeight}px`);
  }

  render() {
    const { children } = this.props;

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

            <BackgroundContainer>
              <Background />
            </BackgroundContainer>

            <Wrapper>
              <Header ref={this.header} />

              <Content ref={this.content}>
                {children}
              </Content>
            </Wrapper>
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
