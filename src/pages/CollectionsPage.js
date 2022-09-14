import React from "react";
import { Collections } from "../components/Collections/Collections";
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
      

      {!isLoading && <Collections data={data} />}
    </>
  );
};
