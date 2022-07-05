import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function CartContainer() {
 const {amount, cartItems, totalAmount} =   useSelector((store)=>store.cart)

 if(amount<1){
     return (
         <section className='cart'>
             <header>
                 <h2>Your bag </h2>
                 <h4 className='empty-cart'> is currently empty</h4>
             </header>
         </section>
     )  
 }

  return (
    <section className='cart'>
<header>
    <h2>Your Bag</h2>
</header>

<div>
{cartItems.map((items)=>{
    return <CartItem key={items.id} {...items}></CartItem>
})}
</div>

<footer>
<hr/>
<div className='cart-total'>
 <h4>
     total <span>{totalAmount}</span>
 </h4>
</div>
<button className='btn clear-btn'>clear cart</button>
</footer>
</section>
  )
}

export default CartContainer