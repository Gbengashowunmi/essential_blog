// import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useContext, useState } from "react";
import { AppUrl } from "../../App";
import "./DashboardStyles/WriteBlog.scss";
import Editor from "./Editor";
import Dashboard from "./Dashboard";
import AuthenticationContext from "../Login/AuthContext";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Oval } from "react-loader-spinner";
import { toast } from 'react-toastify'


export default function WriteBlog() {
  const authctx = useContext(AuthenticationContext);
  const getAdmin = window.localStorage.getItem('is_admin');
  const getLoggedIn = window.localStorage.getItem('is_loggedIn');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false)
  // const [showBtn, setShowBtn] = useState(true)



  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const modules = {
    toolbar: [
        ["bold", "underline", "italic"],
        ["code-block", "blockquote"],
        [{ header: [1, 2, 3, 4, 5] }],
        [{ list: "ordered" }],
        [{ list: "bullet" }],
        ['link', 'image'],
    ]
}
console.log(value);
  const [image, setImage] = useState(null)

  const HandleInput = (e) => {
    setInput({
      ...input,[e.target.name]: e.target.value});
  };
    // console.log(input.title);
    //     if(input.title ===''){
    //   setShowBtn(false)
    // }

    
    const HandleImage = (e) =>{
  setImage(e.target.files[0])
    }
    // console.log(image);
    // const [showBtn, setshowBtn] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${getLoggedIn}`);
    var formdata = new FormData();
    formdata.append("image", image);
    formdata.append("description", value);
    formdata.append("title", input.title);


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
    };

    setLoading(true)

    fetch(`${AppUrl}/posts/`, requestOptions)
      .then(response => response.json())
      .then(result => {console.log(result)
        toast.success('post sent for approval')})
      .catch(error => {console.log('error', error)
;
    })
      
  
      setTimeout(() => {
        setLoading(false)
      }, 1500);

  }
  return (

    <Dashboard>
    <div className="writeBlog">
      <h3 className="header">Write Your Blog here</h3>
      <form className="blogpreview">
        <div className="setPost">
          <button className="preview">Preview</button>
          <button type="submit" className="save">
            Save
          </button>
        </div>
      </form>

      <form
        className="text-area"
        onSubmit={submitHandler}
        method="post"
        encType="multipart/form-data"
      >
        <label>Title:</label>
        <input
          name="title"
          placeholder="Enter Title"
          onChange={HandleInput}
          className="title"
        />

        <label>Description:</label>
        <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} className="editorr"  placeholder="write your blog here"/>
        {/* <textarea onChange={HandleInput} name="description" id="your-text" placeholder="Enter description"></textarea> */}

        <label>Image:</label>
        <input name="file" type="file" onChange={HandleImage}/>
        {/* <button type="submit" className= {showBtn?"submit-btn" : " hide submit-btn"}>post</button> */}
        <button type="submit" className="submit-btn" >  {loading? <Oval  height={20} width={20} color="white" margin="auto"  wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel='oval-loading' secondaryColor="white" strokeWidth={2} />: 'Post'}</button>:
        
      {/* <div className={response? 'show':'hide'}>Post sent</div> */}
      </form>

      {/* {
      
      CKEditor.replace("your-text")
      } */}
    </div>

    </Dashboard>
  );
}
