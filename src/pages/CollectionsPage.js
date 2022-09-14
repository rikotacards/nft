import React from "react";
import { Collection } from "../components/Collection/Collection";
import { Gallery } from "../components/Gallery/Gallery";
import { useGetCollections } from "../hooks/useGetCollections";

// shows various collections

export const CollectionsPage = () => {
  const { data, nextPage, prevPage, isLoading, startInclusive } = useGetCollections();

  return (
    <>
      <div>{isLoading && "Loading Collections"}</div>
      <button disabled={isLoading || !startInclusive} onClick={prevPage}>
        Prev
      </button>
      <button disabled={isLoading} onClick={nextPage}>
        next
      </button>
      

      {!isLoading && < Gallery GalleryItemWrapper={Collection} data={data} />}
    </>
  );
};
