import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const Context = createContext(null);
import { API_URL, VENTAS_INDEX } from "@env";
import { createQueryByEmpAndType, createQueryTotalData } from "../utils/elk";
import moment from 'moment';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export const ContextProvider = ({ children }) => {
  
  const [valueEmail, setValueEmail] = useState('julian');
  const [valuePassword, setValuePassword] = useState('julian');
  const [token, setToken] = useState("")
  const [sid, setSid] = useState("")
  const [uid, setUid] = useState("")
  const [companies, setCompanies] = useState([])
  const [sales, setSales] = useState([])
  const [salesFlotilla, setSalesFlotilla] =  useState([])
  const [date, setDate] = useState ({}) 
  const [totalSale, setTotalSale] = useState([])
  const [firstDayMonthLast, setFirstDayMonthLast] =  useState({})
  console.log(date, "dates sacando context")
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

  //Obteniendo ventas
  let salesByemp = []
  let flotilla = []
  const getQuerySales = async (emp) => {                     
    let inicial;
    let final;
    if(date.start === undefined && date.end=== undefined) {
      inicial = moment().startOf('month').format('YYYY/MM/DD');
      final   = moment().endOf('month').format('YYYY/MM/DD');
    } else {
      inicial = moment(date.start).format('YYYY/MM/DD')
      final = moment(date.end).format('YYYY/MM/DD') 
      console.log("renderizando otros dias")
    }
    const tk = await AsyncStorage.getItem('@token');
    

    await axios.post(API_URL + 'elk/broker', {
      'type': '_count',
      'index': VENTAS_INDEX,
      'query': createQueryByEmpAndType(emp.nid, 'Flotilla', inicial, final),
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': tk
      },
      withCredentials: true
    
      }).then((response) => {
        flotilla.push(response.data.count)
        setSalesFlotilla(flotilla)

      }).catch(error => {
        console.log(error, "error en flotilla")
      })

    await axios.post(API_URL + 'elk/broker', {
      'type': '_count',
      'index': VENTAS_INDEX,
      'query': createQueryByEmpAndType(emp.nid, 'Menudeo', inicial, final),
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': tk
      },
      withCredentials: true
    
      }).then((response) => {
       salesByemp.push(response.data.count)
       setSales(salesByemp)
      }).catch(error => {
        console.log(error, "error getquerysales")
      })

    }
    
    //Obteniendo el id de las empresas
    const getCompany =  (date) => {
      const tk = AsyncStorage.getItem('@token');
      axios.get(API_URL + 'empresas', {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': tk
        },
      }).then((response) => {
        for (const idCompanies of response.data) {
         getQuerySales(idCompanies)      
        }
      }).catch(error => {
        console.log(error, "getCOmpany")
      })
    }

  useEffect(()=>{
    getCompany() 
  },[])

  return (
    <Context.Provider
      value={{
        login,
        logout,
        getCredentials,
        getCompany,
        getQuerySales,
        setDate,
        valuePassword,
        valueEmail,
        token,
        companies,
        sales,
        totalSale,
        salesFlotilla,
      }}>
      {children}
    </Context.Provider>
  );
};


