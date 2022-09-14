import React from 'react';
import { Collection } from '../components/Collection/Collection';
import { Collections } from '../components/Collections/Collections';
import { useGetCollections } from '../hooks/useGetCollections';

// shows various collections

export const CollectionsPage = () => {
  const {data, nextPage, prevPage, isLoading} = useGetCollections()
  console.log('get data', data)
  
  return (
    <>
    {isLoading && 'loading' }
    <button disabled={isLoading} onClick={nextPage}>next</button>
    <button onClick={prevPage}>Prev</button>

    {!isLoading && <Collections data={data}/>}
    </>
  )
}