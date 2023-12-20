import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../components/FormModal";
import { useState } from "react";
import { editTask, removeTask } from "./redux/slices/crudSlice";

export const CrudPage = () => {
  const dispatch= useDispatch();
  const state = useSelector((store) => store.crudReducer);

 const [isOpen,setIsOpen]= useState(false);
 const[editItem,setEditItem]= useState(null);




  return (
    <div className="px-3">
      <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>

      {/* oluşturma modalı */}
      <FormModal  editItem={editItem} isOpen={isOpen}  close={() => {setIsOpen(false); setEditItem(null) }} />

      {/* tablo */}
      <Table className="mt-5" variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Görev</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
            <th>Tarih</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task, i) => (
            <tr key={i}>
              <td>{i} </td>
              <td> {task.title} </td>
              <td>{task.autor} </td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <Button onClick={()=> dispatch(removeTask(task.id))} variant="danger"> Sil</Button>
                <Button onClick={()=> {setEditItem(task);setIsOpen(true)}} variant="success"> Düzenle</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
