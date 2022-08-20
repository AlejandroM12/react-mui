import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Searcher } from "./components/Searcher/Searcher";
import { getGithubUser } from "./services/users";

 const App = () => {

  const [ inputUser, setInputUser ] = useState('octocat');
  const [ userState, setUserState ] = useState(inputUser);
  const [ notFound, setNotFound ] = useState(false);

  const gettingUser = async (user) => {
    const userResponse = await getGithubUser(user);

    if(userState === 'octocat'){
      localStorage.setItem('octocat', JSON.stringify(userResponse))
    }
    if(userResponse.message === 'Not Found'){
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    }else{
      setUserState(userResponse);
      setNotFound(false);
    }
    console.log(userState)
  }
  useEffect(()=>{
    gettingUser(inputUser);
  },[inputUser]);

  return (
    <Container sx={{
      background: "whiteSmoke",
      width: "80vw",
      height: "500px",
      borderRadius: "16px",
      marginTop: "40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  );
};
export default App;

