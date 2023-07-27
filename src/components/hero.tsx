import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Hero() {
  const data = useStaticQuery(graphql`
    {
      backgroundImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <GatsbyImage
      alt="Emarosa hero image"
      image={data.backgroundImage.childImageSharp.gatsbyImageData}
    />
  );
}
