import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; // LOCAL CUSTOM HOOKS

import useSearch from "./hooks/use-search"; // LOCAL CUSTOM COMPONENT

import SearchResult from "./components/search-result"; // STYLED COMPONENT

import { SearchOutlinedIcon } from "./styles";
import { useState } from "react";
import fetchData from "@/utils/fetchData";
export default function SearchInput() {
  const { handleSearch, parentRef, resultList } = useSearch();
  const [searchText, setSearchText] = useState(""); // INPUT PROPS
  const INPUT_PROPS = {
    sx: {
      border: 0,
      height: 44,
      paddingRight: 0,
      overflow: "hidden",
      backgroundColor: "grey.200",
      "& .MuiOutlinedInput-notchedOutline": {
        border: 0,
      },
      fontSize: 18,
    },
    endAdornment: (
      <Button
        color="primary"
        disableElevation
        variant="contained"
        sx={{
          px: "3rem",
          height: "100%",
          borderRadius: "0 4px 4px 0",
        }}
        onClick={async(e) => {
          if (!esTalla(searchText?.toUpperCase())) {
            window.location.href = `/shop?search=${searchText}`;
          } else if (esTalla(searchText?.toUpperCase())) {
            console.log(esTalla(searchText?.toUpperCase()))
            
            const option = null;
      
            console.log(option.data)
            window.location.href = `/shop?sizes=${option.data[0]?? ""}`;
          }
        }}
      >
        Buscar
      </Button>
    ),
    startAdornment: <SearchOutlinedIcon fontSize="small" />,
  };

  const tallaPattern = /^(?:\d{1,2}\s*X{1,2}L{0,2}|\d{1,2}\s*\/\s*\d{1,2}(?:\s+(?:SHORT|LONG|EXTRA\s+LONG))?|\d{1,2}\s*[Xx]\s*\d{1,2}|\d{1,2}X{1,2}L{0,2})$|^(?:CH|G|L|M|S|XG|XL|XXL|XS)$/;


function esTalla(entrada) {
  return tallaPattern.test(entrada);
}


  const handleKeyPress = async(e) => {
    if (e.key === "Enter" && !esTalla(e.target.value?.toUpperCase())) {
      window.location.href = `/shop?search=${e.target.value}`;
    } else if (e.key === "Enter" && esTalla(e.target.value?.toUpperCase())) {

      console.log(esTalla(e.target.value?.toUpperCase()))
      
      const option = null

      console.log(option.data)
      window.location.href = `/shop?sizes=${option.data[0]?? ""}`;
    }
  };

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{
        ref: parentRef,
      }}
    >
      <TextField
        onKeyDown={handleKeyPress}
        fullWidth
        variant="outlined"
        placeholder="Buscar"
        onChange={(e) => {
          handleSearch(e);
          setSearchText(e.target.value);
        }}
        InputProps={INPUT_PROPS}
      />

      {/* SHOW SEARCH RESULT LIST */}
      {resultList.length > 0 ? <SearchResult results={resultList} /> : null}
    </Box>
  );
}
