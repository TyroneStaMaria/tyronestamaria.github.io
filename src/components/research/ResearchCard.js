import { Box } from "@material-ui/core";
import React from "react";
import Button from "../Button";




const ResearchCard = ({title, abstract, website}) => {
  return(
    <Box component="div" data-sal="fade" data-sal-duration="1500">
      <h2>{title}</h2>
      <p style={{ paddingTop:`24px` }}>{abstract}</p>
      <Button link={website}>Project Website</Button>
    </Box>
  );
}

export default ResearchCard
