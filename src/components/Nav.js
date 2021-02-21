import React, { useState } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useMediaQuery } from "react-responsive";


const Navbar = () =>{
  const isBreakpoint = useMediaQuery({query: '(max-width: 565px)'});

  const [hideNav, setHideNav] = useState(true);

  return(
    <>
      <Box component="div" className={`overlay ${ hideNav ? "hidden" : ""}`}/>
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
                <Box component="div" className={`mobile-nav ${ hideNav ? "hidden" : ""}`}>
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