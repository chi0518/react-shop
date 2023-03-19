import { createSlice } from '@reduxjs/toolkit'

const products = createSlice({
  name : 'products',
  initialState : [
    {id : 0, name : "신발스", count : 2},
    {id : 1, name : "구두스", count : 1}
  ],
  reducers : {
    countUpdate(state,action){
      state[action.payload].count+=1;
      
    },
    increase(state, action){
      state[0].count += action.payload;
    },
  }
})

export const { countUpdate, increase } =  products.actions

export default products;