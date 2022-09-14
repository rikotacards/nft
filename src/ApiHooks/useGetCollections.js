import React from 'react';
import { STEP } from '../config/paginationStep';
export const useGetCollections = (collectionType) => {
  const [data, setData ] = React.useState([])
  const [total, setTotal] = React.useState(0)
  const [hasError, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [startInclusive, setStart] = React.useState(0);
  const [endExclusive, setEnd] = React.useState(STEP);
  const endpoint = `http://localhost:8010/proxy/api/nft/collections_page?startInclusive=${startInclusive}&endExclusive=${endExclusive}&collectionType=${collectionType}`;
  
  const nextPage = () => {
    setStart(endExclusive)
    setEnd(endExclusive + STEP)
  }
  const prevPage = () => {
    setStart(startInclusive - STEP)
    setEnd(endExclusive - STEP)
  }
  React.useEffect(() => {
    setLoading(true)
    fetch(endpoint).then((res) => {
      if (res.ok) {
        return res.json()
      }
    }).then((data) => {
      console.log('getting data', data)
      setData(data?.result?.collections)
      setTotal(data?.result?.count)
      setLoading(false)
      setError(false)
    }).catch((e) => {
      setError(true)
    })
  }, [endpoint]);
  return {
    startInclusive,
    data,
    nextPage,
    prevPage,
    isLoading,
    total,
    hasError
  }
}