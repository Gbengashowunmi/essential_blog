import React, { useEffect, useState } from 'react'
import { AiOutlineRight, AiTwotoneCalendar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AppUrl } from '../App'
import './styles/Tech.scss'

export default function Tech() {
    const [techNews, setTechNews] = useState([])


    const fetchPost = async () => {
        const response = await fetch(`${AppUrl}/posts/`)
        const data = await response.json()
        setTechNews(data)
        console.log(data)
    }

    useEffect(() => {
        fetchPost()
    }, [])

  
  return (
    <div className='tech'>
    <span><h3>TECH</h3><p>VIEW ALL<AiOutlineRight /></p></span>
    <div className='tech-items'>
{techNews.map(eachNews =>{
    return (
<div className='tech-item'>
{/* <Link to={`detail/${eachNews.id}`}> <div className='image-container'> */}

<Link to={`detail/${eachNews.slug}/posts`}   state={{data:'posts'}}> 
{/* <div className='overlay'></div> */}

 <div className='image-container'>

            <img src={eachNews.image} alt=''/>
            <div className='button'>
            <button>Future</button>
            <h5>{eachNews.title}</h5>
            </div>
            </div>
            
            <div className='tech-details'>
                <p className='description'>{eachNews.description.substring(0,154)}</p>
                <p><AiTwotoneCalendar/> {eachNews.created}</p>
            </div>
            </Link>
        </div>
    )
})}
         
    </div>
    </div>
  )
}
