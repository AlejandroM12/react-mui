import { Grid, Link, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import { IconButtonContainer } from "../Searcher/style";

export const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;
  return (
    <Grid container spacing={1} sx={{ marginTop: "15px" }}>
      <Grid item xs={6}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            boxShadow: `.3rem .3rem .6rem #c8d0e7, 
          -.2rem -.2rem .5rem #FFFFFF`,
            width: "17rem",
            minHeight: "4rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButtonContainer>
            <LocationOnIcon />
          </IconButtonContainer>
          {location !== null ? (
            <Typography>{location}</Typography>
          ) : (
            <Typography>Not Available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            boxShadow: `.3rem .3rem .6rem #c8d0e7, 
          -.2rem -.2rem .5rem #FFFFFF`,
            width: "17rem",
            minHeight: "4rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButtonContainer>
            <TwitterIcon />
          </IconButtonContainer>

          {twitter_username !== null ? (
            <Typography>@{twitter_username}</Typography>
          ) : (
            <Typography>Not Available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            boxShadow: `.3rem .3rem .6rem #c8d0e7, 
          -.2rem -.2rem .5rem #FFFFFF`,
            width: "17rem",
            minHeight: "4rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButtonContainer>
            <LanguageIcon />
          </IconButtonContainer>

          {blog !== null ? (
            <Typography>
              <Link underline="none" target="_blank" href={blog}>
                {blog}
              </Link>
            </Typography>
          ) : (
            <Typography>Not Available</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            boxShadow: `.3rem .3rem .6rem #c8d0e7, 
          -.2rem -.2rem .5rem #FFFFFF`,
            width: "17rem",
            minHeight: "4rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButtonContainer>
            <BusinessIcon />
          </IconButtonContainer>

          {company !== null ? (
            <Typography>{company}</Typography>
          ) : (
            <Typography>Not Available</Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};
