import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        backgroundImage: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img style={{ height: '100%' }} fluid={data.backgroundImage.childImageSharp.fluid} />}
  />
);
export default Background;
