import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const listSlice = createSlice({
  name: 'list',
  initialState:{
    dateTime:"",
    title:"",
    content:"",
    id:"",
    limit:2,
    items:[],
    inicialItems:[],
    itemsToMap:[],
  },
  reducers: {
    setItemsToMap: (state)=>{
      state.itemsToMap = [...state.inicialItems, ...state.items]
    },
    setItemsToMapReset: (state)=>{
      state.itemsToMap = ""
    },
    setInicialItems: (state, action)=>{
      state.inicialItems = action.payload
    },
    setTitle: (state, action) =>{
      state.title = action.payload
    }, 
    setContent: (state, action) =>{
      state.content = action.payload
    },
    setId: (state, action) =>{
      state.id = action.payload
    }, 
    setDateTime:(state, action) =>{
      state.dateTime = action.payload
    }, 
    setList: (state, action) => {
      state.items = action.payload ;
    },
    erroList: (state) => {
      state.items = "";
    },
    setLimitPlus: (state)=>{
      state.limit = state.limit + 2;
    },
    setLimitReset: (state)=>{
      state.limit =  2;
    },
    setListInicial: (state) => {
      state.title= "";
      state.content= "";
    }
  }
})

export const {setList, 
              erroList, 
              setTitle, 
              setContent, 
              setId, 
              setDateTime, 
              setListInicial, 
              setLimitPlus,
              setLimitReset,
              setInicialItems,
              setInicialItemsReset,
              setItemsToMap,
              setItemsToMapReset } = listSlice.actions;
export const getData = (state) => state.list.items;
export default listSlice.reducer;


export function fetchInicialItems() {
  return async (dispatch) => {
    axios
      .get(`https://dev.codeleap.co.uk/careers/?limit=5&offset=0`)
      .then((response) => {
        dispatch(setInicialItems(response.data.results))
        dispatch(setItemsToMap())
      })
      .catch((error) => {
        dispatch(erroList());
      });
  };
}

export function fetchItems(limit) {
  return async (dispatch) => {
    axios
      .get(`https://dev.codeleap.co.uk/careers/?limit=${limit}&offset=5`)
      .then((response) => {
        console.log(response.data.results)
        dispatch(setList(response.data.results));
      })
      .catch((error) => {
        dispatch(erroList());
      });
  };
}

export function postItems(user, title, content) {
  return async (dispatch) => {
    console.log(user, title, content)
    axios
      .post(`https://dev.codeleap.co.uk/careers/?limit=5`,{
        "username": user,
        "title": title,
        "content":content,
        "dateTime":new Date().toISOString(),
      })
      .then((response) => {
        dispatch(setList(response.data.results));
        dispatch(setListInicial())
      })
      .catch((error) => {
        dispatch(erroList());
      });
  };
}


export function putItems( user, title, content, id) {
  return async (dispatch) => {
    console.log( user, title, content, id)
    axios
      .put(`https://dev.codeleap.co.uk/careers/${id}/`, {
        "id": id,
        "username": user,
        "title": title,
        "content":content,
        "dateTime":new Date().toISOString(),
      })
      .then((response) => {
        dispatch(setList(response.data.results));
        dispatch(setListInicial())
        dispatch(setLimitReset());
        dispatch(setItemsToMapReset())
      })
      .catch((error) => {
        dispatch(erroList());
      });
  };
}

export function deleteItems(id) {
  return async (dispatch) => {
    console.log(id)
    axios
      .delete(`https://dev.codeleap.co.uk/careers/${id}/`,{
        "id": id
      })
      .then((response) => {
        dispatch(setList(response.data.results));
        dispatch(setListInicial());
        dispatch(setLimitReset());
        dispatch(setItemsToMapReset());
      })
      .catch((error) => {
        dispatch(erroList());
      });
  };
}