// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/*
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
const [ data, setData ] = useState()
    const [ isLoading, setIsLoading ] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetcher('https://jsonplaceholder.typicode.com/todos/')
            .then(data => {
                
                setData(data)
                setIsLoading(false)
            })
    }, [])   

    if(isLoading) return <p>Loading...</p>
    if(!data || data.map == null) return <p>No info to show</p>

import { useState, useEffect } from "react";


export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer =  setTimeout(() => {
      setCount((count) => count+1);
    
  }, 1000);

  return () => clearTimeout()
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}*/