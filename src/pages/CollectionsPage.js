import { Button, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { Collection } from "../components/Collection/Collection";
import { Gallery } from "../components/Gallery/Gallery";
import { useGetCollections } from "../ApiHooks/useGetCollections";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { collectionTypes } from "../config/collectionTypes.data";

// shows various collections

export const CollectionsPage = () => {
  
  const [collectionType, setCollectionType] = React.useState("");
  const { data, nextPage, prevPage, isLoading, startInclusive, total } =
  useGetCollections(collectionType);
  const handleChange = (event) => {
    setCollectionType(event.target.value);
  };

  return (
    <div>
      <Typography variant="h4">Collections ({total})</Typography>
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
          <InputLabel id="demo-simple-select-label">Collection Type</InputLabel>
          <Select
          disabled={isLoading}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={collectionType}
            label="Collection Type"
            onChange={handleChange}
          >
            {collectionTypes.map((type, i) => <MenuItem key={type+i} value={type}>{type}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <Box>
        {!isLoading && <Gallery GalleryItemWrapper={Collection} data={data} />}
      </Box>
    </div>
  );
};
