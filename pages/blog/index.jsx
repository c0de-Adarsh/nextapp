import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Blog() {
  const router = useRouter();
  const clickHandler = () =>{
  
   router.push('/blog/title-3');
  }
  return (
    <div>
      <h1>
        <Link href='/blog/title-1' replace> Title 1 </Link>
      </h1>
      <h1>
      <Link href='/blog/title-2'> Title 2 </Link>
      </h1>
      <h1>
        <button onClick={clickHandler}>
        Title 3
        </button>
        </h1>
      <h1>Title 4</h1>
      <h1>Title 5</h1>
    </div>
  )
}
