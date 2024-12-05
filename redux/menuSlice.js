import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
      { id: 1, name: "Pizza", description: "Delicious cheese pizza", image: "/images/pizza.avif",price:200 },
      { id: 2, name: "Burger", description: "Juicy beef burger", image: "/images/burger.avif" ,price:400},
      { id: 3, name: "Vada Pav", description: "Mumbai cha VadaPav", image: "/images/maxresdefault.jpg" ,price:200},
      { id: 4, name: "Misal Pav", description: "Puny chi Misal", image: "/images/images.jpg" ,price:100},
      { id: 5, name: "Thallipeeth", description: "Maharastrian Special Thalipeeth", image: "/images/thalipeeth.jpg" ,price:300},




    
      
      
      
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