import React, { createContext, useEffect, useState } from 'react';
import {API_URL} from "@env"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const Context = createContext(null);

export const ContextProvider = ({ children }) => {

  const [valueEmail, setValueEmail] = useState('julian');
  const [valuePassword, setValuePassword] = useState('julian');
  const [token, setToken] = useState("")
  const [sid, setSid] = useState("")
  const [uid, setUid] = useState("")
  const [cookie, setCookie] = useState("")
  const [currentToken, setCurrentToken] = useState("")
  const [status, setStatus] =  useState("")


  const  getCredentials = async () => {
    try {
      let tk = await AsyncStorage.getItem('@token');
      setToken(tk)
      let sid_user = await AsyncStorage.getItem('@sid');
      setSid(sid_user)
      let uid_user = await AsyncStorage.getItem('@uid');
      setUid(uid_user)
      let ck = await AsyncStorage.getItem('@cookie');
      setCookie(ck)
    } catch(e) {
      console.log("No se pudo guardar la credencial en la store")
    }
  }

  const removeCredentials = async () => {
    await AsyncStorage.removeItem('@token');
    await AsyncStorage.removeItem('@uid');
    await AsyncStorage.removeItem('@sid');
    await AsyncStorage.removeItem('@cookie');
  }


  setCredentials = async (data, status) => {
    try {
      await AsyncStorage.setItem('@token',data.token);
      await AsyncStorage.setItem('@sid', data.sessid);
      await AsyncStorage.setItem('@uid',  data.user.uid);
      await AsyncStorage.setItem('@cookie', data.session_name + '=' + data.sessid)
    } catch(e) {
      console.log("No se pudo guardar la credencial en la store")
    }
  }
  
  //login user
  const login = async  () => {
    return axios.post(API_URL + 'user/login', {
      "username": valueEmail,
      "password": valuePassword
    },{
      headers: {
        'Content-Type': 'application/json',
        "X-CSRF-Token": token,
      },
      withCredentials: true
    })
    .then((res) => {
      alert("usuario logueado")
      console.log(res.data)
      setCredentials(res.data)
      return res.status
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }
  
  const logout = async () => {
    let tk = await AsyncStorage.getItem('@token');
    let sid_user = await AsyncStorage.getItem('@sid');
    let uid_user = await AsyncStorage.getItem('@uid');
    return axios.post(API_URL + 'custom/logout',{
      "uid": parseInt(uid_user),
      "sid": sid_user,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token":  tk
      },
      withCredentials: true
    }).then(response=> {
      removeCredentials()
      return response.status
    }).catch(error=>{
    })
  }
  
  useEffect(()=>{
  },[])


  return (
    <Context.Provider
    value={{
      login,
      logout,
      getCredentials,
      valuePassword,
      valueEmail,
      token,
    }}>
    {children}
    </Context.Provider>
  );
};


