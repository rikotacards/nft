import { Button, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import { Gallery } from "../components/Gallery/Gallery";
import { Nft } from "../components/Nft/Nft";
import { useGetCollection } from "../ApiHooks/useGetCollection";
// displays all nfts per collection
export const CollectionPage = () => {
  const params = useParams();

  const { data, nextPage, prevPage, isLoading, startInclusive } =
    useGetCollection(params.collectionName);
    if(data?.payload?.success && data?.payload?.result.total === 0){
      return (
        <div>
          <Typography>No available NFTs for this collection</Typography>
        </div>
      )
    }
  return (
    <div>
      <Typography variant='h4'>{params.collectionName}</Typography>
      <div>{isLoading && "loading"}</div>
      <Button disabled={isLoading || !startInclusive} onClick={prevPage}>
        Prev
      </Button>
      <Button disabled={isLoading} onClick={nextPage}>
        next
      </Button>
      {!isLoading && <Gallery data={data.payload?.result?.nfts} GalleryItemWrapper={Nft} />}
    </div>
  );
};
