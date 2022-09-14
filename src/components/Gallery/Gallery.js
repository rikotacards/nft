import { Grid } from "@mui/material";
import React from "react";
export const Gallery = (props) => {
  const { data, GalleryItemWrapper } = props;
console.log(data)
  const collectionItems = data?.map((collection, i) => (
    <Grid item key={(collection.group_id ? collection.group_id : collection.id)+i} columns={{ xs: 4, sm: 8, md: 12 }}>
      <GalleryItemWrapper {...collection}  />
    </Grid>
  ));

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      {collectionItems}
    </Grid>
  );
};
