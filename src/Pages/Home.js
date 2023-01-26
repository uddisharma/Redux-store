import React from 'react'
import Products from '../Components/Products'

function Home() {
    return (
        <div>
            <h1>This is Redux Store website</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
                <Products />
            </div>
        </div>
    )
}

export default Home