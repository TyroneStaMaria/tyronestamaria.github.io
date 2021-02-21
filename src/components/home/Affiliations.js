import { Box, Container, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import AffiliationCard from "./AffiliationCard";

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

  const isBreakpoint = useMediaQuery(`(max-width: 920px)`)

  return(
    <Box component="div" py={4} style={{ backgroundColor: `#F5F5F5` }}>
      <Container maxWidth="md" style={{ paddingBottom: `64px` }} >
        <h1 style={{ paddingBottom: `24px`, paddingTop:`24px` }} data-sal="slide-right" data-sal-duration="1000">Affiliations</h1>
        <Grid container spacing={2} direction={!isBreakpoint ? "row" : "column"} alignItems="center">
          {
            orgData.map(({img, name, position}, index) => {
              return(
              <Grid item xs={4} data-sal="fade" data-sal-duration="1500" key={index}>
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