import React from 'react'
import {useLoaderData,
} from "react-router-dom";



export async function loader(){
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=deac68428ba74fcba4b42de7f88d038d')
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
          <img className='card-image' src={article.urlToImage} alt="No Image Available" />
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
