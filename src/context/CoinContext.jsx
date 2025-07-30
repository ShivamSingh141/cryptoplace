import { createContext, useEffect, useState } from "react";

export const coincontext=createContext();

const Coincontextprovider=(props)=>{
    //allcoin will come from api
    const [allcoin,setallcoin]=useState([]);
    const[currency,setcurrency]=useState({
        name:"usd",
        Symbol:"$"
    })
const  fetchallcoin=async()=>{

const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-mxxggndGGkqfaJLWvxD4o5Nf'}
};

fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
  .then(res => res.json())
  .then(res => setallcoin(res))
  .catch(err => console.error(err));

    }

    useEffect(()=>{
        fetchallcoin();
    },[currency])

    const contextValue={
        allcoin,currency,setcurrency
    }

return (
    <coincontext.Provider value={contextValue}>
        {props.children}
    </coincontext.Provider>
)
}
export default Coincontextprovider;