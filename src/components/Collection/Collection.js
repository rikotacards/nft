import React from "react";
import {useNavigate} from 'react-router-dom';

// individual collection
export const Collection = (props) => {
  const { collectionDict, group_id, total, volume } =
    props;
    const navigate = useNavigate();
    const onClick = React.useCallback(() => navigate(`/collection/${group_id}`, {replace: false}), [navigate, group_id]);

  return (
    <div onClick={onClick} style={{border: '1px solid black', maxWidth: '100px', width: '100%'}}>
      <img alt={group_id} style={{maxWidth: '100px'}}  src={collectionDict?.avatarImageUrl} />
      <div>
        <div>
          group id
        </div>
        <div>
          {group_id}
        </div>
      </div>
      <div>
        <div>
          total
        </div>
        <div>
          {total}
        </div>
      </div>
      <div>
        <div>
          volume
        </div>
        <div>
          {volume}
        </div>
      </div>
    </div>
  );
};
