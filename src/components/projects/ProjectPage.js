import { Box, Container } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";


const ProjectPage = () => {

  const images = useStaticQuery(graphql`
    {
      projects: allFile(filter: {relativeDirectory: {eq: "projects"}}, sort: {fields: name, order: ASC}) {
        nodes {
          name
          childImageSharp{
            fluid(maxWidth: 1000){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

    
  const projectData = projects;
  projectData.forEach((project, index)=>{
    project["img"] = images.projects.nodes[index].childImageSharp.fluid;
  })
  console.log(projectData);

  return(
    <Box component="div" py={8}>
      <Container maxWidth="md" className="project-page">
        <h1 data-sal="slide-right" data-sal-duration="1000">Projects</h1>
        <Box component="div" alignItems="center" className="project-container">
          { 
            projectData.map(({name, description, link, img}, index) => {
              return(
                <ProjectCard img={img} name={name} description={description} link={link} order={index} key={index}/>
              )
            })
          }
        </Box>
      </Container>
    </Box>
  );
}

export default ProjectPage
