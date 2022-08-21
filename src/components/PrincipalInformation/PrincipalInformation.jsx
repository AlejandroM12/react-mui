import { Stack, Typography } from "@mui/material";
import { IconButtonContainer } from "../Searcher/style";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6" sx={{
        boxShadow: `.3rem .3rem .6rem #c8d0e7, 
        -.2rem -.2rem .5rem #FFFFFF`,
        padding: "1rem",
      }}>Created at: 
        <IconButtonContainer sx={{margin:"0rem 1rem"}}>
         <CalendarMonthIcon />
        </IconButtonContainer>
         {created_at}
         </Typography>
      </Stack>
      <Stack>
        <Typography variant="caption">{`@${login}`}</Typography>
      </Stack>
    </>
  );
};
