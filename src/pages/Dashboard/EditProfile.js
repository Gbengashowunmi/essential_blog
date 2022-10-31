import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TextField from "@mui/material/TextField";
import "./DashboardStyles/EditProfile.scss";
import Fab from "@mui/material/Fab";
import { AppUrl } from "../../App";

const EditProfile = () => {
  const [first_name, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [id, setId] = useState("");
  const getLoggedIn = window.localStorage.getItem("is_loggedIn");

  const firstName = window.localStorage.getItem("first_name");
  const getUserId = window.localStorage.getItem("user_id");
  const getEmail = window.localStorage.getItem("email");

  const fetchUserDetails = async () => {
    const result = await fetch(`${AppUrl}/users/${getUserId}`);
    const data = await result.json();
    console.log(data);
    setFirstName(data.first_name);
    setLastName(data.profile.last_name);
    setImage(data.profile.image);
    setEmail(data.email);
    setId(data.profile.id);
    // setName(data.first_name);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${getLoggedIn}`);
    var formdata = new FormData();
    formdata.append("image", image);
    // formdata.append("username", username);
    formdata.append("user", getUserId);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
    };

    // setLoading(true)

    fetch(`${AppUrl}/userprofile/${id}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // toast.success('post sent for approval')
      })
      .catch((error) => {
        console.log("error", error);
      });

    //   setTimeout(() => {
    //     setLoading(false)
    //   }, 1500);
  };

  const HandleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  };
  const HandleLastName = (e) => {
    setLastName(e.target.value);
  };
  const HandleEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0].name);

    // if (e.target.files && e.target.files[0]) {
    //   let reader = new FileReader();
    //   reader.onload = (e) => {
    //     setImage(e.target.result);
    //   };
    //   reader.readAsDataURL(e.target.files[0]);
    // }
  };
  return (
    <Dashboard>
      <form className="edit_profile" onSubmit={submitHandler}>
        <div className="left_sect">
          <div className="image">
            <img src={image} />
            <button>
              <input onChange={changeImage} type="file" placeholder={image} />
            </button>
          </div>
          <h5>username: {first_name}</h5>
        </div>
        <div className="right_sect">
          <h3>Profile Settings</h3>
          <div className="form">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className="input"
              onChange={HandleFirstNameInput}
              value={first_name}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              className="input"
              onChange={HandleLastName}
              value={lastName}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              //   disabled
              variant="outlined"
              className="input"
              onChange={HandleEmail}
              value={email}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-basic"
              label="username"
              variant="outlined"
              className="input"
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              className="input"
            />
            <TextField
              id="outlined-basic"
              label="confirm password"
              variant="outlined"
              className="input"
            />

            <Fab variant="extended" className="btn" type="submit">
              Update Profile
            </Fab>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default EditProfile;
