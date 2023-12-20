import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
// basşlangıç stati tanımla
const initialState = {
  tasks: [
    {
      id: 'sfzfdf21',
      title: 'avbar Animasyonu',
      autor: 'Ahmet',
      assigned_to: 'Mehmet',
      end_date: '2024-01-01',
    },
    {
        id: 'e3wwewr',
        title: 'cam silme Animasyonu',
        autor: 'Muarrem',
        assigned_to: 'Cafer',
        end_date: '2024-04-01',
      }
  ],
};
//slice i oluştur
const crudSlice = createSlice({
  name: 'crud',
  initialState,

  //statin nasıl değişeceğine karar verer reducer fonksiyonları
  reducers: {

    //yeni task ekleme
    addTask: (state, action) => {
    // todoya id ekleme
    action.payload.id=v4()
    //toolkitle birlikte slice de tuttuğumuz veriyi doğrudan değiştirebiliyoruz
    state.tasks.push(action.payload)
    },
    //taskı güncelleme
    editTask: (state, action) => {

      //actiononun payloadı ile gelern objnenin
      //state tutuğımuz eski halini çıkarıp
      //payload ile gelen halini ekleyeceğiz

      //a=güncellenecek eleemanın sırasını bul


      const i = state.tasks.findIndex((t) => t.id ===action.payload.id);
          //splice yöntemi
      state.tasks.splice(i,1,action.payload)

      //2. yöntem
     /*  state.task[i]=action.payload;
 */
      console.log("sıra nedir",i)
    },


    //taskı silme
    removeTask: (state, action) => {
      const filterd = state.tasks.filter( (task)=>task.id !== action.payload);
      state.tasks=filterd;
    },

  },
});
//aksiyonları tek tek export et

export const {editTask,addTask,removeTask} = crudSlice.actions;

//reducer'i export et
export default crudSlice.reducer;
