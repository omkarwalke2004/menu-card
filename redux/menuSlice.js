import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
      { id: 1, name: "Pizza", description: "Delicious cheese pizza", image: "/images/pizza.avif",price:200 },
      { id: 2, name: "Burger", description: "Juicy beef burger", image: "/images/burger.avif" ,price:400},
    
      
      
      
    ],
  };
  
const menuslice = createSlice({
    name:"menu",
    initialState,
    reducers:{
      addmenuItem:(state,action) =>{
        state.items.push({...action.payload,id:state.items.length + 1});
      },
      deletemenuItem:(state,action) =>{
        state.items = state.items.filter((item)=>item.id !== action.payload);
      },
      updateMenuItem: (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index >= 0) {
          state.items[index] = { ...state.items[index], ...action.payload.data };
        }
      },
  
    }
    
})
  export const {addmenuItem,deletemenuItem,updateMenuItem} = menuslice.actions;
  export default menuslice.reducer;