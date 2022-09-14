import React from 'react';
const step = 30
export const useGetCollection = (nftFilterString) => {
  React.useEffect(() => {
console.log('inEffect', nftFilterString)
  }, [nftFilterString])
  const [data, setData ] = React.useState([])
  const [isLoading, setLoading] = React.useState(false);
  const [startInclusive, setStart] = React.useState(0);
  const [endExclusive, setEnd] = React.useState(step);
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
      console.log('e', endpoint)
      if (res.ok) {
        return res.json()
      }
    }).then((data) => {
      
      console.log('THE COLLECTION', data?.result?.nfts)
      setData(data?.result?.nfts)
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