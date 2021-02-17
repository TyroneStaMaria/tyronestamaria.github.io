import React from "react";
import { Box, Container, Grid } from "@material-ui/core";


const Navbar = () =>{
  return(
    <Box component="nav" className="navbar">
      <Container maxWidth="md" className = "nav-items">
        {/* Tyrone Sta. Maria */}
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <h2>Tyrone Sta. Maria</h2>
          </Grid>
          <Grid item>
            <Box component="ul">
              <Box component="li"><a href="/">About</a></Box>
              <Box component="li"><a href="/projects">Projects</a></Box>
              <Box component="li"><a href="/research">Research</a></Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


export default Navbar;