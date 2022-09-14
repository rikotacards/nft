import React from 'react';
export const endpoint = "http://localhost:8010/proxy/api/nft/collections_page?startInclusive=0&endExclusive=5";

// shows various collections

export const CollectionsPage = () => {
  React.useEffect(() => {
    console.log('use Effect called')
    fetch(endpoint).then((res) => {
      if (res.ok) {
        console.log(res)
        return res.json()
      }
    }).then((data) => {
      console.log('data', data)
    })
  }, []);
  return (
    <>
    </>
  )
}