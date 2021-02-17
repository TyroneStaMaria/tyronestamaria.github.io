import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProjectPage from "../components/projects/ProjectPage"

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <ProjectPage/>  
  </Layout>
)

export default IndexPage
