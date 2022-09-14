import { Grid } from "@mui/material";
import React from "react";
export const Gallery = (props) => {
  const { data, GalleryItemWrapper } = props;

  const collectionItems = data?.map((collection, i) => (
    <Grid item columns={{ xs: 4, sm: 8, md: 12 }}>
      <GalleryItemWrapper {...collection} key={collection.group_id + i} />
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
