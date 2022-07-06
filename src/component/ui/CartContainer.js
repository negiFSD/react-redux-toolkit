import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { clearCart, calculateTotals } from '../features/cart/cartSlice'

function CartContainer() {
    const dispatch = useDispatch()
 const {amount, cartItems, totalAmount} =   useSelector((store)=>store.cart)

 useEffect(()=>{
     dispatch(calculateTotals())
 },[cartItems])

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
     total <span>{totalAmount.toFixed(2)}</span>
 </h4>
</div>
 <button className='btn clear-btn' onClick={()=>dispatch(clearCart())}>clear cart</button>

</footer>
</section>
  )
}

export default CartContainer