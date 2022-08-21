import { Container, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Searcher } from "./components/Searcher/Searcher";
import { finalTheme, UserNotFound } from "./components/Searcher/style";
import { UserCard } from "./containers/userCard/UserCard";
import { getGithubUser } from "./services/users";
import CloseIcon from "@mui/icons-material/Close";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState(inputUser);
  const [notFound, setNotFound] = useState(false);

  const gettingUser = async (user) => {
    const userResponse = await getGithubUser(user);

    if (userState === "octocat") {
      localStorage.setItem("octocat", JSON.stringify(userResponse));
    }
    if (userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
      setNotFound(false);
    }
  };
  const handleClose = () => {
    setNotFound(false);
  };
  useEffect(() => {
    gettingUser(inputUser);
  }, [inputUser]);

  return (
    <ThemeProvider theme={finalTheme}>
      <Container
         maxWidth="xxl"
        sx={{
          borderRadius: "3rem",
          boxShadow: `.8rem .8rem 1.4rem #c8d0e7, 
        -.2rem -.2rem 1.8rem #FFFFFF`,
          width: "90%",
          height: "90%",
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Searcher inputUser={inputUser} setInputUser={setInputUser} />
        {notFound && (
          <UserNotFound>
            <CloseIcon
              onClick={handleClose}
              sx={{ color: "red", cursor: "pointer" }}
            />
            Usuario no encontrado
          </UserNotFound>
        )}
        <UserCard userState={userState} />
      </Container>
    </ThemeProvider>
  );
};
export default App;
