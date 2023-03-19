import { configureStore, createSlice } from '@reduxjs/toolkit'
import products from './store/productSlice';

const stock = createSlice({
  name : 'stock',
  initialState : [11,12,13]
})

export default configureStore({
  reducer: {
    stock : stock.reducer,
    products : products.reducer
   }
}) 