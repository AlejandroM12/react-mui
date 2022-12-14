import { Avatar, CardMedia, Grid, Stack } from "@mui/material";
import { PrincipalInformation } from "../../components/PrincipalInformation/PrincipalInformation";
import { Description } from "../Description/Description";

export const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url, login } = userState;
  console.log(avatar_url);
  return (
    <Grid
      container
      spacing={1}
      sx={{
        marginTop: "5px",
      }}
    >
      <Grid item xs={3} sx={{}}>
        <Avatar
          alt={login}
          src={avatar_url}
          sx={{
            width: "100%",
            height: "auto",
            boxShadow: `9px 9px 16px rgba(189, 189, 189, 0.6),
            -9px -9px 16px rgba(255, 255, 255, 0.5)`,
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            margin: "30px",
          }}
        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
};
