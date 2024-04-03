import React, { PropsWithChildren } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

type TLayout = PropsWithChildren<{}>;

function Layout({ children }: TLayout) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
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
      </Helmet>

      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: #121212;
    color: white;
    font-family: 'Bebas Neue', sans-serif;
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

export default Layout;
