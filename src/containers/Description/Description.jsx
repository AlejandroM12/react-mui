import { Stack, Typography } from "@mui/material";
import { LocationInformation } from "../../components/LocationInformation/LocationInformation";
import { PaperInformation } from "../../components/PaperInformation/PaperInformation";

export const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
      <Stack 
        justifyContent="center"
      >
        {bio !== null ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">Not Available</Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};
