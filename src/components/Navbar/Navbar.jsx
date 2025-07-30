import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { coincontext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {setcurrency}=useContext(coincontext)


const currencyHandler=(e)=>{
  switch(e.target.value){
    case "usd":{
      setcurrency({name:"usd",symbol:"$"});
      break;
    }
    case "inr":{
      setcurrency({name:"inr",symbol:"₹"});
      break;
    }
    case "eur":{
      setcurrency({name:"eur",symbol:"€"});
      break;
    }
    default:{
      setcurrency({name:"usd",symbol:"$"});
      break;
  }
  }
}


  return (
    <div className='navbar'>
      <Link to={`/`}>
        <img src= {logo} alt="" className='logo'/>
        </Link>
        <ul>
           <Link to={`/`}>
            <li>Home</li>
            </Link>
            <li>Features</li>
            <li>pricing</li>
            <li>Blog</li>
          

        </ul>
      <div className="navbar-right">
        <select onChange={currencyHandler} className='currency-select'>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
        </select>
        <button>Sign up <img src={arrow_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar
