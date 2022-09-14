import { Button, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { Collection } from "../components/Collection/Collection";
import { Gallery } from "../components/Gallery/Gallery";
import { useGetCollections } from "../hooks/useGetCollections";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// shows various collections

export const CollectionsPage = () => {
  const { data, nextPage, prevPage, isLoading, startInclusive } =
    useGetCollections();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Typography variant="h4">Collections</Typography>
      {isLoading && <div>{"Loading Collections"}</div>}
      {isLoading && <div>{<LinearProgress />}</div>}
      <div>
        <Button disabled={isLoading || !startInclusive} onClick={prevPage}>
          Prev
        </Button>
        <Button disabled={isLoading} onClick={nextPage}>
          next
        </Button>
      </div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        {!isLoading && <Gallery GalleryItemWrapper={Collection} data={data} />}
      </Box>
    </div>
  );
};
