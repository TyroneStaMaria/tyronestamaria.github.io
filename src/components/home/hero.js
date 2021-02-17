import { Box, Container } from "@material-ui/core";
import React from "react";
import about from "../../data/about.json";
// import Layout from "../layout"
import tyrone from "../../images/tyrone.jpg";
import Button from "../Button";



const Hero = () => {
  
  return(
    <Box component="div" py={8}>
      <Container maxWidth="md" className="hero">
        <Box component = "div" style={{backgroundImage:`url(${tyrone})`}} className="intro-image" alignSelf="center"/>
        <h1>Introduction</h1>
        <p>
          {about.intro}
        </p>
        <Button>Download Resume</Button>
      </Container>
    </Box>
  );
}

export default Hero
