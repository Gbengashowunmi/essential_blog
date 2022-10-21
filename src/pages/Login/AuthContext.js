import React, { createContext, useState } from "react";

const AuthenticationContext = createContext({
    token:'',
    userId:'',
    first_name:'',
    isLoggedIn: false,
    is_admin:false,
    login: function (token){
        
    },
    logout: function(){},

})

export const AuthenticationContextProvider = (props) =>{
    const [token, setToken] = useState()
    const [firsName, setFirstName] = useState()
    const [userId, setUserId] = useState()
    const [admin, setAdmin] = useState(false)

    const loginHandler = (token,first_name, userId, admin)=>{
        setToken(token)
        setFirstName(first_name)
        setUserId(userId)
        admin?setAdmin(true):setAdmin(false)
    } 
    const logoutHandler = ()=>{
        setToken(null)
    }

    // function tokenCheck (){
    //     if()
    // }
    const userIsLoggedIn = token
    const contextValue ={

        token: token,
        isLoggedIn: userIsLoggedIn,
        first_name:firsName,
        userId:userId,
        login:loginHandler,
        logout:logoutHandler,
        is_admin:admin

    }

    return (<AuthenticationContext.Provider value={contextValue}>
{props.children}
    </AuthenticationContext.Provider>)
}

export default AuthenticationContext