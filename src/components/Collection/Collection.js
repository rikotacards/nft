import React from "react";
import {useNavigate} from 'react-router-dom';

// individual collection
export const Collection = (props) => {
  const { collectionDict, first_nft, group_id, group_type, total, volume } =
    props;
    const navigate = useNavigate();
    const onClick = React.useCallback(() => navigate(`/collection/${group_id}`, {replace: false}), [navigate]);

  return (
    <div onClick={onClick} style={{border: '1px solid black', maxWidth: '100px', width: '100%'}}>
      <img style={{maxWidth: '100px'}}  src={collectionDict?.avatarImageUrl} />
      <div>
        <div>
          group id
        </div>
        <div>
          {group_id}
        </div>
      </div>
    </div>
  );
};
