import {  TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {  Finder, FinderOuter, IconButtonContainer } from "./style";

export const Searcher = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { setInputUser } = props;

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };
  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Finder
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <FinderOuter>
          <TextField
            fullWidth
            label="GitHub User"
            id="outlined-basic"
            type="text"
            size="small"
            variant="outlined"
            value={valueInput}
            onChange={onSearchValueChange}
            sx={{
              width: "100%",
            }}
            InputProps={{
              endAdornment: (
                <IconButtonContainer onClick={handleSubmit} size="small">
                  <SearchIcon />
                </IconButtonContainer>
              ),
            }}
          />
      </FinderOuter>
    </Finder>
  );
};
