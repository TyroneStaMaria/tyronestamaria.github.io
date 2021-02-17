import { Box, Container } from "@material-ui/core";
import React from "react";
import Button from "../Button";
import ProjectCard from "./ProjectCard";



const ProjectPage = () => {
  
  return(
    <Box component="div" py={8}>
      <Container maxWidth="md" className="hero">
        <h1>Projects</h1>
        <ProjectCard order={0}/>
      </Container>
    </Box>
  );
}

export default ProjectPage
