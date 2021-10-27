import { Box, Container, Grid } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import React from "react"
import about from "../../data/about.json"
// import Layout from "../layout"
import tyrone from "../../images/tyrone.jpg"
import Button from "../Button"

import file from "../../files/tyrone_resume.pdf"

const Hero = () => {
  const isBreakpoint = useMediaQuery(`(max-width: 405px)`)

  return (
    <Box component="div" py={8}>
      <Container maxWidth="md" className="hero">
        <Box
          component="div"
          style={{ backgroundImage: `url(${tyrone})` }}
          className="intro-image"
          alignSelf="center"
          data-sal="fade"
          data-sal-duration="500"
        />
        <h1 data-sal="slide-right" data-sal-duration="1000">
          Introduction
        </h1>
        <p data-sal="fade" data-sal-duration="1500">
          {about.intro}
        </p>
        <Grid
          container
          spacing={3}
          justify={!isBreakpoint ? "flex-start" : "center"}
        >
          <Grid item data-sal="fade" data-sal-duration="1500">
            <Button link={file}>Download Resume</Button>
          </Grid>
          <Grid item data-sal="fade" data-sal-duration="1500">
            <Grid container spacing={2} className="socmed">
              <Grid item>
                <a
                  href="https://www.facebook.com/tyrone.stamaria35/"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
              </Grid>
              <Grid item>
                <a href="https://twitter.com/tyronestamaria_" target="_blank">
                  <TwitterIcon />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.linkedin.com/in/tyrone-sta-maria-243a69188/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </Grid>
              <Grid item>
                <a href="https://github.com/TyroneStaMaria/" target="_blank">
                  <GitHubIcon />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
