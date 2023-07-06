import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const Context = createContext(null);
import { API_URL, VENTAS_INDEX } from "@env";
import { createQueryByEmpAndType } from "../utils/elk";
import moment from 'moment';


export const ContextProvider = ({ children }) => {

  const [valueEmail, setValueEmail] = useState('julian');
  const [valuePassword, setValuePassword] = useState('julian');
  const [token, setToken] = useState("")
  const [sid, setSid] = useState("")
  const [uid, setUid] = useState("")
  const [dateInicial, setInicial] = useState("");  
  const [dateFinal, setFinal] = useState("");
  const [companies, setCompanies] = useState([])
  const [sales, setSales] = useState(0)
   

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


   const setCredentials = async (data, status) => {
    try {
      await AsyncStorage.setItem('@token',data.token);
      await AsyncStorage.setItem('@sid', data.sessid);
      await AsyncStorage.setItem('@uid',  data.user.uid);
      await AsyncStorage.setItem('@emp_id', data.user.field_empresa_account.und[0].target_id);
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
      setCredentials(res.data)
      return res.status
    })
    .catch(error => {
     console.log(error)
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

  //get query sales
  const getQuerySales = async (emp) => {
    console.log(emp, "emp")
    let inicial = moment(dateInicial).format('YYYY/MM/DD');
    let final = moment(dateFinal).format('YYYY/MM/DD');
    console.log(inicial, "inicial")
    console.log(final, "final")
    const tk = await AsyncStorage.getItem('@token');
    axios.post(API_URL + 'elk/broker', {
      'type': '_count',
      'index': VENTAS_INDEX,
      'query': createQueryByEmpAndType(emp, 'Menudeo', inicial, final),
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': tk
      },
      withCredentials: true
    
      }).then(async(response) => {
        console.log(response.data.count)
        setSales(response.data.count)
      }).catch(error => {
      })
    }
    
    const getCompany = async () => {
      const tk = await AsyncStorage.getItem('@token');
      axios.get(API_URL + 'empresas', {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': tk
        },

      }).then(async(response) => {
        setCompanies(response.data)
      }).catch(error => {})
    }


    const chargingSalesAllCompanies = async () => { 
       let aux = ""
       for(let i=0; i<companies.length; i++){
         aux = aux + companies[i].Nid
      }

      getQuerySales(aux)
    }

    useEffect(()=>{
      getCompany(), 
      console.log(companies, "companies")
      chargingSalesAllCompanies()
    },[])

  return (
    <Context.Provider
      value={{
        login,
        logout,
        getCredentials,
        setInicial,
        setFinal,
        getQuerySales,
        valuePassword,
        valueEmail,
        token,
        dateInicial,
        dateFinal,
        companies,
        sales,
      }}>
      {children}
    </Context.Provider>
  );
};


