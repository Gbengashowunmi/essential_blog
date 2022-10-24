// import logo from './logo.svg';
import "./App.css";
// import Headers from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftSection from "./components/LeftSection";
import MainSection from "./components/MainSection";
// import Footer from "./components/Footer";
// import RightSection from "./components/RightSection/RightSection";
import DetailsLeftSection from "./components/DetailsLeftSection";
import ScrollToTop from "./components/ScrollToTop";
// import LoginPage from "./components/Login_Signup/LoginPage";

import SignUp from "./pages/Login/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useContext } from "react";
import AuthenticationContext from "./pages/Login/AuthContext";
// import Editor from "./pages/Dashboard/Editor";
import LoginPage from "./pages/Login/LoginPage";
// import Post from "./pages/Dashboard/Media";
import WriteBlog from "./pages/Dashboard/WriteBlog";
import Media from "./pages/Dashboard/Media";
import Team from "./pages/Dashboard/Team";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Posts from "./pages/Dashboard/Posts";
import Categories from "./pages/Dashboard/Categories";
import UserPosts from "./pages/Dashboard/UserPosts";
import Tech from "./components/Tech";

export const AppUrl = "https://essential.pythonanywhere.com";

// export const AppUrl = "http://192.168.1.131:8000";

function App() {
  const authctx = useContext(AuthenticationContext);
  
  const getAdmin = window.localStorage.getItem('is_admin');
  const checkAdmin = getAdmin==='true'?true:false
  const getLoggedIn = window.localStorage.getItem('is_loggedIn');
  // console.log(getAdmin);
  // console.log(getLoggedIn);
  // console.log(typeof(getAdmin))
  // console.log(checkAdmin)
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        {/* <Headers /> */}
        <Routes>
          <Route path="/" element={<MainSection />}>
            <Route index element={<LeftSection />}></Route>
            <Route path="/Tech" element={<Tech />}></Route>
          
            <Route path="/detail/:id/:name" element={<DetailsLeftSection />}></Route>
          </Route>

          <Route path="login" element={<LoginPage />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route
            path={getLoggedIn ? "dashboard" : "login"}
            element={getLoggedIn ? <Dashboard /> : <LoginPage />}
          ></Route>

          
          <Route path= {checkAdmin?"/dashboard/posted-blogs":"/dashboard/create-post"} element={checkAdmin?<Posts/>:<WriteBlog />}></Route>
        {/* <Route path= {authctx.is_admin?"/dashboard/posted-blogs":"/dashboard/create-post"} element={authctx.is_admin?<Posts/>:<WriteBlog />}></Route> */}
          
          
          
          {/* <Route path="/dashboard/posted-blogs" element={<Posts />}></Route> */}
          {/* <Route path="/dashboard/create-post" element={<WriteBlog />}></Route> */}
          <Route path="/dashboard/categories" element={<Categories />}></Route>
          <Route path="/dashboard/user-posts" element={<UserPosts />}></Route>
          <Route path="/dashboard/media" element={<Media />}></Route>
          <Route path="/dashboard/team" element={<Team />}></Route>
          {/* <Route path="/detail/:id" element={<DetailsLeftSection />}></Route> */}
          <Route path="*" element={<LoginPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
