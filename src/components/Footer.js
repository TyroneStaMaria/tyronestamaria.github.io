import { Box, Container } from "@material-ui/core";
import React from 'react';



const Footer = () => {
  // console.log(Date.now());
  let d = new Date();
  return (
    <Box component="footer" className="footer" py={3}>
      <Container maxWidth="md">
        <p> © {d.getFullYear()} -  Made with <span style={{ color:`#B80F0A` }}> ❤ </span> by Tyrone Sta. Maria</p>
      </Container>
    </Box>
  )
}

export default Footer
