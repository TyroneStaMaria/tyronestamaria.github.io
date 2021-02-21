import { Box } from "@material-ui/core";
import Img from "gatsby-image";
import React from "react";

const AffiliationCard = ({ img, orgName, position }) =>{
  return(
    <Box component="div" className="affiliation-card" display="flex" alignItems="center" flexDirection="column">
      <Img fluid={img} alt={orgName} style={{ width:`120px` }} />
      <h2>{orgName}</h2>
      <h4 style={{ fontWeight:`normal` }}>{position}</h4>
    </Box>
  );
}

export default AffiliationCard;