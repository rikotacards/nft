import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {Typography} from '@mui/material'
// individual collection
export const Collection = (props) => {
  const { collectionDict, group_id, total, volume } = props;
  const navigate = useNavigate();
  const onClick = React.useCallback(
    () => navigate(`/collection/${group_id}`, { replace: false }),
    [navigate, group_id]
  );

  return (
    <Card
      onClick={onClick}
      style={{ padding: 1, margin: 2, maxWidth: "100px", width: "100%" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={collectionDict?.avatarImageUrl}
          height="140"
        />
        <div>
          <div><Typography variant='caption'>{group_id}</Typography></div>
        </div>
        <div>
          <div>total</div>
          <div>{total}</div>
        </div>
        <div>
          <div>volume</div>
          <div>{volume}</div>
        </div>
      </CardActionArea>
    </Card>
  );
};
