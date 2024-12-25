import React from 'react'
import { useRouter } from 'next/router';

export default function Post({data}) {
  const router = useRouter();
  if(router.useRouter());
  if(router.isFallback){
    return(
      <h1>loading data</h1>
    )
  }
  console.log(data)
  return (
    <h1>
      {data.title}
      {data.body}
    </h1>
  )
}

 export async function getStaticPaths(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  
     const paths = posts.map((post)=>{
      return{
        params:{
          id: post.id.toString()
        }
      }
     })
   return {
    
     paths,
     fallback:true
   }
 }

 export async function getStaticProps(context) {
     const {params} = context;
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

     const data = await response.json();

     return {
        props:{
           data
        }
     }
 }