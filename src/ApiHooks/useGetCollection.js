import React from 'react';
const step = 30
export const useGetCollection = (nftFilterString) => {
  React.useEffect(() => {
  }, [nftFilterString])
  const [payload, setPayload ] = React.useState({})
  const [isLoading, setLoading] = React.useState(false);
  const [startInclusive, setStart] = React.useState(0);
  const [endExclusive, setEnd] = React.useState(step);
  const [hasError, setError] = React.useState(false);
  const endpoint = `http://localhost:8010/proxy/api/nft/nfts_filtered?startInclusive=${startInclusive}&endExclusive=${endExclusive}&nft_filter_string=${JSON.stringify({collection: nftFilterString})}`;
  
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
    }).then((payload) => {
      setPayload((prev) => ({...prev, payload}))
      setLoading(false)
      setError(false)
    }).catch((e) => {
      setError(true)
    })
  }, [endpoint]);
  return {
    startInclusive,
    data:payload,
    nextPage,
    prevPage,
    isLoading,
    hasError
  }
}