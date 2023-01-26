
import { createSlice } from '@reduxjs/toolkit'
export const STATUSES = {
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error',
}
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setProduct(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
})
export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;


export const fetchProducts = () => {
    return async function fetchproductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            dispatch(setProduct(data))
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}