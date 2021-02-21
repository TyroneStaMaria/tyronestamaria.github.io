import { Box, Container } from "@material-ui/core";
import React from "react";
import research from "../../data/research.json";
import ResearchCard from "./ResearchCard";

const ResearchPage = () => {

  return(
    <Box component="div" py={8} >
      <Container maxWidth="md" className="hero" style={{ paddingBottom: `184px` }} >
        <h1 data-sal="slide-right" data-sal-duration="1000">Research</h1>
        { 
          research.map(({title, abstract, website}, index)=>{
            return( <ResearchCard title={title} abstract={abstract} website={website} key={index}/> )
          }) 
        }
      </Container>
    </Box>
  );
}

export default ResearchPage
