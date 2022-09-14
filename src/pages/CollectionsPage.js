import React from "react";
import { Collections } from "../components/Collections/Collections";
import { useGetCollections } from "../hooks/useGetCollections";

// shows various collections

export const CollectionsPage = () => {
  const { data, nextPage, prevPage, isLoading } = useGetCollections();

  return (
    <>
      <div>{isLoading && "loading"}</div>
      <button disabled={isLoading} onClick={prevPage}>
        Prev
      </button>
      <button disabled={isLoading} onClick={nextPage}>
        next
      </button>
      

      {!isLoading && <Collections data={data} />}
    </>
  );
};
