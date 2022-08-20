import { Stack, Typography } from "@mui/material";

export const PrincipalInformation = (props) => {

    const {userState} = props;
    const { name, login, created_at  } = userState;

  return (
    <>
        <Stack>
            <Typography>{name}</Typography>
            <Typography>{created_at}</Typography>
            <Typography>{login}</Typography>
        </Stack>
        
    </>
  )
}
