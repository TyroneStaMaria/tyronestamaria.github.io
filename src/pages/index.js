import React from "react"
import Affiliations from "../components/home/Affiliations"
import Hero from "../components/home/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Affiliations />
  </Layout>
)

export default IndexPage
