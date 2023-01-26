import React, { useEffect, useState } from 'react'

function Products() {
    const [prod, setProd] = useState([]);
    useEffect(() => {
        const fetchprods = async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = res.json();
            console.log(data);
            setProd(data);
        }
        fetchprods();
    }, [])
    return (
        <>
            <div>Products</div>
            {
                prod.map((e) => (
                    <div key={e.id}>
                        <img style={{ height: '250px', width: '250px' }} src={e.image} alt={e.id} />
                        <p>{e.price}</p>
                        <p>{e.title}</p>
                        <button>add to cart</button>
                    </div>
                ))
            }
        </>

    )
}

export default Products