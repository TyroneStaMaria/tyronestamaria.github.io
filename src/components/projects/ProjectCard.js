import { Box, Grid, Container } from "@material-ui/core";
import React from "react";
import Button from "../Button";
import { useMediaQuery } from "react-responsive";




const ProjectCard = ({img, name, description, link, order}) => {
  // console.log(order)
  const isBreakpoint = useMediaQuery({query: '(max-width: 920px)'})

  console.log(img.src)
  return(
    <Box component="div" className="project-card">
      {
        !isBreakpoint ? (
          <>
            <h2>{name}</h2>
            <Grid container spacing={2} alignItems="flex-start" direction={order % 2 === 0 ? "row" : "row-reverse"} >
              <Grid item xs={6}>
                <Box component = "div" style={{ backgroundImage:`url(${img.src})`}} className="project-image" />

                {/* <Img fluid={img} alt={name} style={{ width:`400px` }} /> */}
              </Grid>
              <Grid item xs={6}>
                <p>{description}</p>
                <Button>Go to site</Button>
              </Grid>
            </Grid>
          </>
        ):
        (
          <Box component = "div">
            <Container maxWidth="md">
              <h2>{name}</h2>
              <Box component = "div" style={{ backgroundImage:`url(${img.src})`, margin:`0 auto` }} className="project-image" alignSelf="center" />
              <p>{description}</p>
              <Button>Go to site</Button>

            </Container>
          </Box>
        )
      }
    </Box>
  );
}

export default ProjectCard
