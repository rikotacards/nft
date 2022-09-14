import React from "react";

export const Nft = (props) => {
  const { name, description, imageUrl } = props;
  return (
    <div style={{ border: "1px solid black" }}>
      <div>
        <div>name:</div>
        <div>{name}</div>
      </div>
      <div>
        <img style={{ maxWidth: "100px" }} src={imageUrl} />
      </div>
      <div>
        <div>desc:</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
