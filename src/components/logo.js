import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        backgroundImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{ height: '100%' }}
        fluid={data.backgroundImage.childImageSharp.fluid}
      />
    )}
  />
);
export default Logo;
