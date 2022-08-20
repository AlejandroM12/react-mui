import { Stack, Typography } from "@mui/material";

export const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{created_at}</Typography>
      </Stack>
      <Stack>
        <Typography variant="caption">{`@${login}`}</Typography>
      </Stack>
    </>
  );
};
