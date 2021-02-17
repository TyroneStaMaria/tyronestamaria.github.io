import { Box, Grid } from "@material-ui/core";
import React from "react";
import Button from "../Button";




const ResearchCard = ({title, abstract, website}) => {
  return(
    <Box component="div">
      <h2>{title}</h2>
      <p style={{ paddingTop:`24px` }}>{abstract}</p>
      <Button>Project Website</Button>
    </Box>
  );
}

export default ResearchCard
