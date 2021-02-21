import { Box, Container, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from "react";


const Navbar = () =>{
  const isBreakpoint = useMediaQuery(`(max-width: 565px)`);

  const [hideNav, setHideNav] = useState(true);

  return(
    <>
      <Box component="div" className={`overlay ${ hideNav ? "hide" : ""}`} onClick = {()=> {
          setHideNav(!hideNav);
        }}
      />
      <Box component="nav" className="navbar">
        <Container maxWidth="md" className = "nav-items">
          {!isBreakpoint ? (
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <h2>Tyrone Sta. Maria</h2>
              </Grid>
              <Grid item >
                <Box component="div" className="desktop-nav">
                  <Box component="ul">
                    <Box component="li"><a href="/">About</a></Box>
                    <Box component="li"><a href="/projects">Projects</a></Box>
                    <Box component="li"><a href="/research">Research</a></Box>
                  </Box>
                </Box>
                </Grid>
            </Grid>

          ) :
          (
            <Grid container spacing={3}>
              <Grid item>
                <MenuIcon style={{ fontSize: `32px` }} onClick = {()=> {
                  setHideNav(!hideNav);
                }} />
                <Box component="div" className={`mobile-nav ${ hideNav ? "hide" : ""}`}>
                  <Box component="div">
                    <CloseIcon style={{ fontSize: `32px`, float:`right`, padding:`12px` }} onClick = {()=> {
                      setHideNav(!hideNav);
                }} />
                  </Box>
                  <Box component="ul">
                    <Box component="li"><a href="/">About</a></Box>
                    <Box component="li"><a href="/projects">Projects</a></Box>
                    <Box component="li"><a href="/research">Research</a></Box>
                  </Box>
                </Box>

              </Grid>
              <Grid item>
                <h2>Tyrone Sta. Maria</h2>
              </Grid>
            </Grid>
          ) 
          
          }
          
        </Container>
      </Box>
    </>
  );
}


export default Navbar;