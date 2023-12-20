import { Modal, Button, Form } from "react-bootstrap";
import { addTask,editTask } from "../pages/redux/slices/crudSlice";
import { useDispatch } from "react-redux";


//bu formu her hem düzenlemek için
//hemd de eekleme işlemi için kullanıcaz
//bu noktaa nemzan düenleme nezaman ekleme  modundu kullanacağımıza karar veeceğiz
//bu kararırı edit item parametresine göre vericez)
//null gelmediyse o zman düzenleme modundayız




const FormModal = ({ isOpen, close,editItem }) => {
  const dispatch =useDispatch();

  const handleSubmit=(e) => {
    e.preventDefault()
    console.log("submit",e);

    //formdaki inputların değerine erişme
    const form = new FormData(e.target);
    const newTask =Object.fromEntries(form.entries());


    if(editItem){
      dispatch(editTask({...newTask, id: editItem.id}));
    } else{
      dispatch(addTask(newTask))
    }

     

    close();
  }
  return (
    <Modal
      onHide={close}
      show={isOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="text-black" closeButton>
        <Modal.Title className="text-black" id="contained-modal-title-vcenter">
         {editItem ? "Görevi Düzenle" : "Yeni Görev Oluştur"
          }
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="text-black">
        <Form onSubmit={handleSubmit}>
          
          <Form.Group>
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
            defaultValue={editItem?.title}
              type="text"
              name="title"
              placeholder="Görev Giriniz"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Yazar</Form.Label>
            <Form.Control
            defaultValue={editItem?.author}
              type="text"
              name ="autor"
              placeholder="İsminizi Giriniz"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Atanan Kişi</Form.Label>
            <Form.Control
            defaultValue={editItem?.assigned_to}
              type="text"
              name="assigned_to"
              placeholder="Atanan Kişiyi Giriniz"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
            defaultValue={editItem?.end_date}
              required type="date"
              name="end_date"
           
            />
          </Form.Group>
          <Modal.Footer className="mt-3">
        <Button type="submit" variant="success" >
          Kaydet
        </Button>
        <Button onClick={() => close()}>Close</Button>
      </Modal.Footer>
        </Form>
      </Modal.Body>

      
    </Modal>
  );
};

export default FormModal;
