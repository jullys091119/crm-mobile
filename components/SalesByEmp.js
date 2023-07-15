import React, { useContext } from "react";
import {Text, SafeAreaView} from 'react-native'
import { Layout } from "@ui-kitten/components";
import { Context } from "../appcontext/AppContext";

const SalesByemp = () => {
    const {totalSale} = useContext(Context)

    console.log(totalSale)

    return(
      <Layout style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          {
            
            totalSale.map((item)=>{
              return (
                 <Text>{item}</Text>
              )
            })
             
            
          }

      </Layout>
    )
}

export default SalesByemp