// import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useContext, useState } from "react";
import { AppUrl } from "../../App";
import "./DashboardStyles/WriteBlog.scss";
import Editor from "./Editor";
import Dashboard from "./Dashboard";
import AuthenticationContext from "../Login/AuthContext";

export default function WriteBlog() {
  const authctx = useContext(AuthenticationContext);
  const getAdmin = window.localStorage.getItem('is_admin');
  const getLoggedIn = window.localStorage.getItem('is_loggedIn');

  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const [image, setImage] = useState(null)

  const HandleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    console.log(input);
  };
    const HandleImage = (e) =>{
  setImage(e.target.files[0])
    }
    // console.log(image);

  const submitHandler = (e) => {
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${authctx.isLoggedIn}`);
    var formdata = new FormData();
    formdata.append("image", image);
    formdata.append("description", input.description);
    formdata.append("title", input.title);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${AppUrl}/posts/`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // console.log(body)
  }
  return (

    <Dashboard>
    <div className="writeBlog">
      <form className="blogpreview">
        <input placeholder="What You Have Written" />
        <div className="setPost">
          <select
            name="language"
            id="language"
            form="languageform"
            className="preview"
          >
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="yoruba">Yoruba</option>
            <option value="pidgin">Pidgin</option>
          </select>
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
        {/* <Editor /> */}
        <textarea onChange={HandleInput} name="description" id="your-text" placeholder="Enter description"></textarea>

        <label>Image:</label>
        <input name="file" type="file" onChange={HandleImage}/>
        <button type="submit" className="submit-btn">
          Post
        </button>
      </form>

      {/* {
      
      CKEditor.replace("your-text")
      } */}
    </div>
    </Dashboard>
  );
}
