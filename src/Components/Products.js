import React, { useEffect, useState } from 'react'
import { add } from '../store/CartSlice';
import { useDispatch } from 'react-redux';
function Products() {
    const dispatch = useDispatch();
    const [prod, setProd] = useState([]);
    useEffect(() => {
        const fetchprods = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            console.log(data);
            setProd(data);
        }
        fetchprods();
    }, [])
    const handleadd = (prod) => {
        dispatch(add(prod))
    }
    return (

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
            {
                prod.map((prod) => (
                    <div key={prod.id}>
                        <img style={{ height: '200px', width: '200px' }} src={prod.image} alt="" />
                        <p>{prod.title}</p>
                        <p>{prod.price}</p>
                        <button onClick={() => handleadd(prod)}>Add to cart</button>
                    </div>
                ))
            }
        </div>


    )
}

export default Products