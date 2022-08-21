import { Paper, styled } from "@mui/material";

export const PaperInformationContainer = styled(Paper)(({theme}) => ({
  boxShadow: `.3rem .3rem .6rem #c8d0e7, 
  -.2rem -.2rem .5rem #FFFFFF`,
  marginTop: "1rem",
  fontSize: "1.2rem",
    background: "#F6F5F0"
  }));