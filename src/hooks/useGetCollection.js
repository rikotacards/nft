import React from 'react';
const step = 30
export const useGetCollection = (nftFilterString) => {
  const [data, setData ] = React.useState([])
  const [isLoading, setLoading] = React.useState(false);
  const [startInclusive, setStart] = React.useState(0);
  const [endExclusive, setEnd] = React.useState(step);
  const nftFilterString = 'Bored Ape Yacht Club'
  const endpoint = `http://localhost:8010/proxy/api/nft/nfts_filtered?startInclusive=${startInclusive}&endExclusive=${endExclusive}&nft_filter_string=${nftFilterString}`;
  
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
      
      console.log('all', data?.result?.collections)
      setData(data?.result?.collections)
      setLoading(false)
    })
  }, [endpoint]);
  return {
    startInclusive,
    data,
    nextPage,
    prevPage,
    isLoading
  }
}