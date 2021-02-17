import React from "react";
import { Box, Container, Grid } from "@material-ui/core"; 
import AffiliationCard from "./AffiliationCard";
import { graphql, useStaticQuery } from "gatsby";

const Affiliations = () =>{
  const data = useStaticQuery(graphql`
    {
      chi: file(relativePath: {eq: "orgs/chi_mnl.png"}) {
        name
        childImageSharp{
          fluid(maxWidth: 200){
            ...GatsbyImageSharpFluid
          }
        }
      }
      lscs: file(relativePath: {eq: "orgs/lscs_logo.png"}) {
        name
        childImageSharp{
          fluid(maxWidth: 200){
            ...GatsbyImageSharpFluid
          }
        }
      }
      uxph: file(relativePath: {eq: "orgs/uxph_icon.png"}) {
        name
        childImageSharp{
          fluid(maxWidth: 200){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
      
  `)

  const orgData = [
    {
      img: data.chi.childImageSharp.fluid,
      name: "ACM SigChi Manila Chapter",
      position: "Member"
    },
    {
      img: data.lscs.childImageSharp.fluid,
      name: "La Salle Computer Society",
      position: "Research and Development"
    },
    {
      img: data.uxph.childImageSharp.fluid,
      name: "User Experience Philippines",
      position: "Web and Research"
    }
  ]

  return(
    <Box component="div" py={4} style={{ backgroundColor: `#F5F5F5` }}>
      <Container maxWidth="md">
        <h1 style={{ paddingBottom: `24px`, paddingTop:`24px` }}>Affiliations</h1>
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