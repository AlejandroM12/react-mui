import {  Stack, Typography } from "@mui/material";
import { PaperInformationContainer } from "./style";
import { IconButtonContainer } from "../Searcher/style";
import SourceIcon from '@mui/icons-material/Source';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export const PaperInformation = (props) => {
    const { userState } = props;
    const { public_repos, followers, following } = userState;
  return (
    <PaperInformationContainer >
        <Stack spacing={3} direction="row" justifyContent="space-evenly" sx={{margin: "20px"}}>
            <Stack >
                 
                <Typography variant="h5">
                    <IconButtonContainer sx={{marginRight: "1rem"}}>
                        <SourceIcon />
                    </IconButtonContainer>
                    Repositories
                    </Typography>
                <Typography variant="h6" sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>{ public_repos }</Typography>
            </Stack>
            <Stack>
                <Typography variant="h5">
                    <IconButtonContainer sx={{marginRight: "1rem"}}>
                        <SupervisorAccountIcon />
                    </IconButtonContainer>
                    Followers
                    </Typography>
                <Typography variant="h6" sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>{ followers }</Typography>
            </Stack>
            <Stack>
                <Typography variant="h5">
                <IconButtonContainer sx={{marginRight: "1rem"}}>
                        <PeopleOutlineIcon />
                    </IconButtonContainer>
                    Following
                    </Typography>
                <Typography variant="h6" sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>{ following }</Typography>
            </Stack>
        </Stack>
    </PaperInformationContainer>
  )
}
