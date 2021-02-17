import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPage from "../components/projects/ProjectPage"

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <ProjectPage/>  
  </Layout>
)

export default IndexPage
