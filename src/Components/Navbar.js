import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'gray', padding: '20px' }}>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
            <h2>Cart:0</h2>
        </div>
    )
}

export default Navbar