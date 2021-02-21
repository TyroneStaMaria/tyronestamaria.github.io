import { Box, Container, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
// import { useMediaQuery } from "react-responsive";
import Button from "../Button";




const ProjectCard = ({img, name, description, link, order}) => {
  // console.log(order)
  const isBreakpoint = useMediaQuery(`(max-width: 920px)`)

  console.log(img.src)
  return(
    <Box component="div" className="project-card">
      
      <Container maxWidth="md">
        {!isBreakpoint ? (
          <>
            <h2 data-sal="slide-right" data-sal-duration="1500">{name}</h2>
            <Grid container spacing={3} alignItems="flex-start" direction={order % 2 === 0 ? "row" : "row-reverse"}>
              <Grid item xs={6} data-sal={order % 2 === 0 ? "slide-right" : "slide-left"} data-sal-duration="1500">
                <Box component = "div" style={{ backgroundImage:`url(${img.src})`}} className="project-image" />
    
                {/* <Img fluid={img} alt={name} style={{ width:`400px` }} /> */}
              </Grid>
              <Grid item xs={6} data-sal={order % 2 === 0 ? "slide-left" : "slide-right"} data-sal-duration="1500">
                <p>{description}</p>
                {link ? ( <Button link={link}>Go to site</Button> ): ("")}
                
              </Grid>
            </Grid>
          </>
          ) : 
          (
            <>
              <h2>{name}</h2>
              <Box component = "div" style={{ backgroundImage:`url(${img.src})`, margin:`0 auto` }} className="project-image"  />
              <p>{description}</p>
              {link ? ( <Button link={link}>Go to site</Button> ): ("")}
            </>
          ) 
          
          }
        
      </Container>
    </Box>
  );
}

export default ProjectCard
