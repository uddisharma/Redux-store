import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {
    const item = useSelector((state) => state.cart)
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'gray', padding: '20px' }}>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
            <h2>Cart:{item.length}</h2>
        </div>
    )
}

export default Navbar