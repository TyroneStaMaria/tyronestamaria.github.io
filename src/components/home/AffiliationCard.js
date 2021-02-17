import React from "react";
import { Box, Container } from "@material-ui/core"; 
import Img from "gatsby-image";

const AffiliationCard = ({ img, orgName, position }) =>{
  return(
    <Box component="div" className="affiliation-card" display="flex" alignItems="center" flexDirection="column">
      <Img fluid={img} alt={orgName} style={{ width:`120px` }} />
      <h3>{orgName}</h3>
      <h4 style={{ fontWeight:`normal` }}>{position}</h4>
    </Box>
  );
}

export default AffiliationCard;