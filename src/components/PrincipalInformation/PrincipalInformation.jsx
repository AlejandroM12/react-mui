import { Stack, Typography } from "@mui/material";
import { IconButtonContainer } from "../Searcher/style";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from "moment";

export const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <>
      <Stack  justifyContent="space-between" direction={{sm: 'column', xs: 'column', md: 'row'}}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5" sx={{
        boxShadow: `.3rem .3rem .6rem #c8d0e7, 
        -.2rem -.2rem .5rem #FFFFFF`,
        padding: "1rem",
      }}>Created at: 
        <IconButtonContainer sx={{margin:"0rem 1rem"}}>
         <CalendarMonthIcon />
        </IconButtonContainer>
        
         {moment(created_at).format("DD/MM/YYYY hh:mm a")}
         </Typography>
      </Stack>
      <Stack>
        <Typography variant="h6">{`@${login}`}</Typography>
      </Stack>
    </>
  );
};
