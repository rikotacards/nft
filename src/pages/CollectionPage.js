import React from "react";
import { useParams } from "react-router";
import { Gallery } from "../components/Gallery/Gallery";
import { Nft } from "../components/Nft/Nft";
import { useGetCollection } from "../hooks/useGetCollection";
// displays all nfts per collection
export const CollectionPage = () => {
  const params = useParams();

  const { data, nextPage, prevPage, isLoading, startInclusive } =
    useGetCollection(params.collectionName);
  return (
    <>
      {params.collectioName}
      <div>{isLoading && "loading"}</div>
      <button disabled={isLoading || !startInclusive} onClick={prevPage}>
        Prev
      </button>
      <button disabled={isLoading} onClick={nextPage}>
        next
      </button>
      {!isLoading && <Gallery data={data} GalleryItemWrapper={Nft} />}
    </>
  );
};
