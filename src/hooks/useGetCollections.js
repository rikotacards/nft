import React from 'react';
const step = 5
export const useGetCollections = () => {
  const [data, setData ] = React.useState([])
  const [isLoading, setLoading] = React.useState(false);
  const [startInclusive, setStart] = React.useState(0);
  const [endExclusive, setEnd] = React.useState(5);
  const endpoint = `http://localhost:8010/proxy/api/nft/collections_page?startInclusive=${startInclusive}&endExclusive=${endExclusive}`;
  
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
    data,
    nextPage,
    prevPage,
    isLoading
  }
}