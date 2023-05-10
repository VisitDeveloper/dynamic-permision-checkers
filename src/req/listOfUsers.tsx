import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getUsers } from '../services/getuser'

export default function ListOfUsers() {
    const { data, isLoading, isError, error , isFetching } = useQuery('todos', getUsers,{
        // cacheTime: 10000, // 10 seconds
        staleTime:1000,
      })

    useEffect(() => {
        console.log('query', data)
    }, [data , ])

    useEffect(() =>{
            console.log('isFetching' , isFetching
    )}, [isFetching])

    if(isLoading){
        return (
            <>
             ...isLoading
            </>
        )
    }
    
  return (
    <div>
        {data?.data!.length !== 0 &&  data?.data.map((item : any) => {
            return (
                <>
                {item.name}
                </>
            )
        })}
    </div>
  )
}
