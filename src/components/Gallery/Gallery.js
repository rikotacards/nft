import React from "react";
export const Gallery = (props) => {
  const { data, GalleryItemWrapper } = props;

  const collectionItems = data?.map((collection, i) => (
    <GalleryItemWrapper {...collection} key={collection.group_id + i} />
  ));

  return <div>{collectionItems}</div>;
};
