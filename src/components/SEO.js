/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `Tyrone Sta. Maria's personal portfolio`,
          content: metaDescription,
        },
        {
          property: `Tyrone Sta. Maria`,
          content: title,
        },
        {
          property: `Tyrone Sta. Maria's personal portfolio`,
          content: metaDescription,
        },
        {
          property: `https://tyronegithub.github.io/`,
          content: `website`,
        },

        {
          name: `twitter:@tyronestamaria`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:@tyronestamaria`,
          content: title,
        },
        {
          name: `twitter:@tyronestamaria`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
