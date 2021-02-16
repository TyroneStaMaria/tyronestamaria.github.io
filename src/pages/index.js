import React from "react"
import Affiliations from "../components/home/Affiliations"
import Hero from "../components/home/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Affiliations />
  </Layout>
)

export default IndexPage
