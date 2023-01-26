import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/CartSlice'
function Cart() {
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const handleremove = (id) => {
        dispatch(remove(id))
    }
    return (
        <div>
            {
                products.map((prod) => (
                    <div key={prod.id}>
                        <img style={{ height: '200px', width: '200px' }} src={prod.image} alt="" />
                        <p>{prod.title}</p>
                        <p>{prod.price}</p>
                        <button onClick={() => handleremove(prod.id)}>Remove</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart