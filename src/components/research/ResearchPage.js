import { Box, Container } from "@material-ui/core";
import React from "react";
import ResearchCard from "./ResearchCard";
import research from "../../data/research.json";

const ResearchPage = () => {

  return(
    <Box component="div" py={8}>
      <Container maxWidth="md" className="hero">
        <h1>Research</h1>
        { 
          research.map(({title, abstract, website}, index)=>{
            return( <ResearchCard title={title} abstract={abstract} website={website} /> )
          }) 
        }
      </Container>
    </Box>
  );
}

export default ResearchPage
