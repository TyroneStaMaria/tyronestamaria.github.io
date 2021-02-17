import { Box, Grid } from "@material-ui/core";
import React from "react";
import Button from "../button";
import OLES from "../../images/projects/oles.png"



const ProjectCard = ({img, description, link, order}) => {
  console.log(order)
  return(
    <Box component="div" className="project-card">
      <h2>Online LLEAP Evaluation System</h2>
      <Grid container spacing={2} alignItems="flex-start" direction={ order % 2 === 0 ? "row" : "row-reverse" } >
        <Grid item xs={6}>
          <img src={OLES} />
        </Grid>
        <Grid item xs={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button>Go to site</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectCard
