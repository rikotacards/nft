import React from 'react';
const step = 30
export const useGetCollections = (collectionType) => {
  const [data, setData ] = React.useState([])
  const [total, setTotal] = React.useState(0)
  const [hasError, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [startInclusive, setStart] = React.useState(0);
  const [endExclusive, setEnd] = React.useState(step);
  const endpoint = `http://localhost:8010/proxy/api/nft/collections_page?startInclusive=${startInclusive}&endExclusive=${endExclusive}&collectionType=${collectionType}`;
  
  const nextPage = () => {
    setStart(endExclusive)
    setEnd(endExclusive + step)
  }
  const prevPage = () => {
    setStart(startInclusive - step)
    setEnd(endExclusive - step)
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