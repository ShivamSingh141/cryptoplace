import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { coincontext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Home = () => {
const {allcoin,currency}=useContext(coincontext);

const [displaycoin,setDisplaycoin]=useState([]);


//for search box
const [input,setinput]=useState('');
const inputhandler=(e)=>{
setinput(e.target.value);
if(e.target.value===""){
  setDisplaycoin(allcoin);
}

}

const searchandler= async(e)=>{
  e.preventDefault();
  const coins=await allcoin.filter((item)=>{
    return item.name.toLowerCase().includes(input.toLowerCase())

  })
setDisplaycoin(coins);
}


useEffect(()=>{
setDisplaycoin(allcoin)

},[allcoin])

  return (
    <div className='home'>
      <div className="hero">
      <h1>Largest <br/>Crypto Marketplace</h1>
      <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>

      <form onSubmit={searchandler}>
        <input onChange={inputhandler} list='coinlist' value={input}type="text" placeholder='search crypto..' required/>
<datalist id='coinlist'>
  {allcoin.map((item,index)=>(<option key={index} value={item.name}/>))}

</datalist>

       <button type='submit'>Search</button>
      </form>
    </div>
    <div className='crypto-table'>
    <div className='table-layout'>
    <p>#</p>
    <p>Coins</p>
    <p>Price</p>
    <p style={{textAlign:"center"}}>24H change</p>
    <p className='market-cap'>Market cap </p>

    </div>
    {
      displaycoin.slice(0,10).map((item,index)=>(
        <Link to={`/coin/${item.id}`} className='table-layout' key ={index}>
          <p>{item.market_cap_rank}</p>

          <div>
  <img src={item.image} alt=""/>
  <p>{item.name+"-"+item.symbol}</p>

          </div>
          <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
          <p className={item.price_change_percentage_24h>0?"green":"red"}>
            {Math.floor(item.price_change_percentage_24h*100)/100}</p>
  <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
          </Link>
      ))
    }
    </div>
    </div>
  )
}

export default Home
