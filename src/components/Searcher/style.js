import { createTheme, IconButton, Stack, styled } from "@mui/material";

export const finalTheme = createTheme({
  components: {
    MuiFormLabel:{
      styleOverrides:{
        root:{
          color: "#9baacf",
          fontSize: "1rem",
          "&:focus-visible":{
            color: "#6D5DFC",
          },
          "&.MuiFormLabel-colorPrimary":{
            color: "#6D5DFC"
          }

        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: "red" },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: "#000000",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: "transparent",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "unset",
          "&:hover": {
            backgroundColor: "unset",
          },
          "&.Mui-focused": {
            backgroundColor: "unset",
          },
          "&.Mui-disabled": {
            backgroundColor: "unset",
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: "transparent",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "none !important",
            outline: "unset !important",
            border: "none !important",
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "none !important",
              border: "none !important",
            },
          },
          color: "#9baacf",
          fontSize: "1rem",
        },
      },
    },
  },
});
export const Finder = styled(Stack)(({theme}) => ({
  flexDirection: "row",
  border: `1px solid #fff`,
  backgroundColor: "#f6f5f0",
  borderRadius: "15px",
  marginTop: "30px",
  width: "100%",
}));
export const FinderOuter = styled("div")(({theme}) => ({
  display: "flex",
  width: "100%",
  padding: "1rem",
  borderRadius: "10px",
  boxShadow: `inset .2rem .2rem .5rem #c8d0e7`,
  "&:focus":{
    boxShadow: `.3rem .3rem .6rem #c8d0e7, 
    -.2rem -.2rem .5rem #FFFFFF`,
  }
}));
export const IconButtonContainer = styled(IconButton)(({theme}) => ({
    borderRadius: "3px",
    width: "35px",
    height: "35px",
    background: "#f6f5f0",
    boxShadow: `-7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001,
    inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001,
    inset 0px 0px 0px 0px #fff9,        
    inset 0px 0px 0px 0px #0001`,
    transition: `box-shadow 0.6s cubic-bezier(.79,.21,.06,.81)`,
    color: `color: rgba(42, 52, 84, 1)`
}));
export const UserNotFound = styled('div')(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1rem",
  width: "17rem",
  minHeight: "4rem",
  boxShadow: `.3rem .3rem .6rem #c8d0e7, 
  -.2rem -.2rem .5rem #FFFFFF`,
  marginTop: "1rem",
  fontSize: "1.2rem"
})); 