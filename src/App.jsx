import { Container } from "@mui/material";
import { useState } from "react";
import { Searcher } from "./components/Searcher/Searcher";
 const App = () => {
  const [ inputUser, setInputUser ] = useState('octocat');
  const [ userState, setUserState ] = useState('inputUser');

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

