import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import React from "react";

export const Nft = (props) => {
  const { name, description, imageUrl } = props;
  return (
    <Card sx={{maxWidth: "200px", width: "100%"}}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} />
        <div>
          <div>
            <Typography variant='caption'>{name}</Typography>
          </div>
        </div>

        <div>
          <div>desc:</div>
          <div>{description}</div>
        </div>
      </CardActionArea>
    </Card>
  );
};
