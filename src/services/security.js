import jwtDecode from "jwt-decode";
import  api  from "./api/index";

const USER_KEY = "@user";

export const signIn = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  
    //setando o token como padrão em todas as requisições
    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  };
  
  export const signOut = () => {
    localStorage.removeItem(USER_KEY);
  
    api.defaults.headers.common["Authorization"] = undefined;
  };
  
  export const getUser = () => {
    const { student } = JSON.parse(localStorage.getItem(USER_KEY));
  
    return student;
  };
  
  export const setUser = (student) => {
    const user = JSON.parse(localStorage.getItem(USER_KEY));
  
    user.student = student;
  
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  };
  
  export const isSignedIn = () => {
    const userToken = localStorage.getItem('token');

    if (userToken === null) {
        return false;
    }else{
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        return true
    }
    // if (userToken && userToken) {
    //   const jwtDecoded = jwtDecode(userToken);
  
    //   const nowTime = (Date.now() / 1000) | 0;
  
    //   if (jwtDecoded.exp < nowTime) {
    //     return signOut();
    //   }
  
    //   return true;
    // }
    
  };