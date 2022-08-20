import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const Searcher = (props) => {

  const [ valueInput, setValueInput ] = useState('');
  const {  setInputUser } = props;

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value
    setValueInput(inputValue);
  }
  const handleSubmit = () => {
    setInputUser(valueInput);
  }
  
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        variant="outlined"
        size="small"
        value={ valueInput }
        onChange={ onSearchValueChange }
        sx={{
          width: "90%",
        }}
      />
      <IconButton
      onClick={ handleSubmit }
      size="small"
        sx={{
          left: "-40px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
