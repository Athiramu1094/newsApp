import React from 'react'
import {useLoaderData,
} from "react-router-dom";



export async function loader(){
  const response = await fetch('https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=f0c356bcfefb7f2d8cfef128e4e232dd')
  const data = await response.json()
  return{data}
}
function News () {
  const { data } = useLoaderData();
  console.log(data)
  console.log(data.articles)
  
  
  
  return (
    <>
    
         <main>
        
        <div className='news'>
        {data.articles && data.articles.map((article, index) => (
          
          <article className='card' key ={index} >
          <img className='card-image' src={article.image} alt="No Image Available" />
          <p className='card-text'>{article.title}</p>
          <button className='card-btn'>Read More</button>
          </article>
          )
          )}
        </div>
      </main>
      </>
    );
  }
  

export default News
