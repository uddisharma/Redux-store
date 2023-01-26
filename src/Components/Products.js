import React, { useEffect, useState } from 'react'
import { add } from '../store/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/ProductSlice';
import { STATUSES } from '../store/ProductSlice';
function Products() {
    const { data, status } = useSelector((state) => state.product)
    const dispatch = useDispatch();
    // const [prod, setProd] = useState([]);
    useEffect(() => {
        dispatch(fetchProducts())
        // const fetchprods = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json();
        //     console.log(data);
        //     setProd(data);
        // }
        // fetchprods();
    }, [])
    const handleadd = (prod) => {
        dispatch(add(prod))
    }
    if (status === STATUSES.LOADING) {
        return <h1>Loading...</h1>
    } else if (status === STATUSES.ERROR) {
        return <h1>Error</h1>
    } else
        return (

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
                {
                    data.map((prod) => (
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