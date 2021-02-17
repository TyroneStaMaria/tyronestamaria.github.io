import React from "react";
import { Box, Container, Grid } from "@material-ui/core"; 
import AffiliationCard from "./AffiliationCard";
import { graphql, useStaticQuery } from "gatsby";
// import Img
const Affiliations = () =>{
  const data = useStaticQuery(graphql`
    {
      orgs: allFile(filter: {relativeDirectory: {eq: "orgs"}}) {
            nodes {
              name
              childImageSharp{
                fluid(maxWidth: 200){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
    }
      
  `)

  const orgData = [
    {
      img: data.orgs.nodes[0].childImageSharp.fluid,
      name: "ACM SigChi Manila Chapter",
      position: "Member"
    },
    {
      img: data.orgs.nodes[1].childImageSharp.fluid,
      name: "La Salle Computer Society",
      position: "Research and Development"
    },
    {
      img: data.orgs.nodes[2].childImageSharp.fluid,
      name: "User Experience Philippines",
      position: "Web and Research"
    }
  ]

  return(
    <Box component="div" py={4} style={{ backgroundColor: `#F5F5F5` }}>
      <Container maxWidth="md">
        <h1>Affiliations</h1>
        <Grid container spacing={2}>
          {
            orgData.map(({img, name, position}, index) => {
              return(
              <Grid item xs={4}>
                <AffiliationCard img={img} orgName={name} position={position}/>
              </Grid>
              )
            } )
          }
        </Grid>
      </Container>
    </Box>
  );
}

export default Affiliations;