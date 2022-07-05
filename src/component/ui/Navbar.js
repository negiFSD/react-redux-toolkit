import React from 'react'
import {CartIcon} from '../../icons'
import { useSelector } from 'react-redux'

function Navbar() {
    // console.log(useSelector((store)=>{console.log(store)}));

    //useSelector provide the acces to global state that we intitiated in redux createSlice 
    const amount = useSelector((store)=>store.cart.amount)
    
  return (
    <nav>
        <div className='nav-center'>
            <h3>redux toolkit</h3>
            <div className='nav-container'>
                <CartIcon/>
            </div>
            <div className='amount-container'>
                <p className='total-amount'>{amount}</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar