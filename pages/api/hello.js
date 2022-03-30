// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/*
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
*/
import { useState, useEffect } from "react";


export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count+1);
    
  }, 1000);

  return () => clearTimeout()
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}