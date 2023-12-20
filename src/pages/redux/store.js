import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";



//configurestore'un createStoredan farkları
//1-varsayılan olarak thunk ile birlikte gelir
//2 veriler reducerları otomatik birleştirfa-inverse

export default configureStore({
  reducer: { counterReducer,crudReducer, },
});
