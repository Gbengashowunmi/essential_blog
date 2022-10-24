// import React from "react";
// import Dashboard from "./Dashboard";

// export default function Posts() {
//   return (
//     <Dashboard>
//       <div>Posts</div>
//     </Dashboard>
//   );
// }

import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
import Dashboard from "./Dashboard";
import "../../components/styles/Reader.scss";
import './DashboardStyles/Post.scss'
import { AppUrl } from "../../App";
import AuthenticationContext from "../Login/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Posts() {

  const authctx = useContext(AuthenticationContext)
  const [adminPosts, setAdminPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPostDetails = async()=> {
setLoading(true);

const getAdmin = window.localStorage.getItem('is_admin');
const getLoggedIn = window.localStorage.getItem('is_loggedIn');
    const result = await fetch(`${AppUrl}/adminpost/`, {
      headers: {
        "Authorization": `Token ${getLoggedIn}`
      },
    })
    const data = await result.json()
    setAdminPosts(data)
    console.log(data)

    setTimeout(() => {
      setLoading(false)
        
      },1500);
  }
  // const data = await response.json();
  useEffect(()=>{
    fetchPostDetails();
  },[])



  return (
    <Dashboard>
    <div className="reader">
    <span className="span">
        <h3>Unpublished Posts</h3>
        {/* <p>
          VIEW ALL
          <AiOutlineRight />
        </p> */}
      </span>

      {
        adminPosts.map(adminPost =>{
          return( loading?<ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#03033a8f" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
             />:
<Link to={`/detail/${adminPost.slug}/posts`}   > 

            <div className="read">
            <img
              src={adminPost.image}
              alt=""
            />
            <div className="read-info">
              <p>Guest Posts, Busines</p>
              <h3>{adminPost.title}</h3>
              <span>
                <p>{adminPost.owner}</p> <p>2</p>
                <p>
                  <AiOutlineClockCircle /> {adminPost.created}
                </p>
              </span>
              <p className="description">
                {adminPost.description.substring(0, 120)}
              </p>
              <span className="pub_btns">   
              <button>Read Post</button> 
              <button className="approve">Publish</button> 
              <button className="reject">Reject</button>
            </span>
            </div>
            {/* </div> */}

          
          </div>
          </Link>
          )
        })
      }

      {/* <div className="reader-container"> */}

      
    </div>
    </Dashboard>
  );
}
 