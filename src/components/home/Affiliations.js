import React from "react";
import { Box, Container, Grid } from "@material-ui/core"; 
import AffiliationCard from "./AffiliationCard";
import { graphql, useStaticQuery } from "gatsby";
import { useMediaQuery } from "react-responsive";

const Affiliations = () =>{
  const data = useStaticQuery(graphql`
    {
      orgs: allFile(filter: {relativeDirectory: {eq: "orgs"}}, sort: {fields: name, order: ASC}) {
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
      name: "Manila ACM SigChi Chapter",
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

  const isBreakpoint = useMediaQuery({query: '(max-width: 920px)'})

  return(
    <Box component="div" py={4} style={{ backgroundColor: `#F5F5F5` }}>
      <Container maxWidth="md">
        <h1 style={{ paddingBottom: `24px`, paddingTop:`24px` }}>Affiliations</h1>
        <Grid container spacing={2} direction={!isBreakpoint ? "row" : "column"} alignItems="center">
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