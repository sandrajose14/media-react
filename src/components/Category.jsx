import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import VedioCard from '../components/VedioCard'
import { addCategoryApi, deleteCategoryApi, getAVideoApi, getCategoryApi, updateCategory } from '../services/callApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Category({videoDragRemove,setVideoDragRemove}) {
  //state to store the category name
  const [categoryName,setCategoryName]=useState("")
  const[allCategory,setAllCategory]=useState([])
  const[deleteCategoryStatus,setDeleteCategoryStatus]=useState(false)
  const[addCategoryStatus,setAddCategoryStatus]=useState(false)
  // console.log(categoryName);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCategoryAdd=async()=>{
   if(categoryName){
    let reqBody={
      category:categoryName,
      allVideos:[]
    }
    const response=await addCategoryApi(reqBody)
    console.log(response);
    if(response.status>=200 && response.status<300){
      toast.success('category added successfully')
      setAddCategoryStatus(true)
      handleClose()
    }else{
      toast.error('something went wrong')
    }
   }else{
    toast.error('please enter the category name')
   }
  }
  //function to get category
  const getCategory=async()=>{
    const response=await getCategoryApi()
    // console.log(response.data);
    setAllCategory(response.data)
  }
  // console.log(allCategory);
  //function to delete
  const handleDeleteCategory = async(id)=>{
    await deleteCategoryApi(id)
    setDeleteCategoryStatus(true)
  }
  const dragStart =(e,categoryId,videoId)=>{
    console.log(`categoryid ${categoryId}`);
   console.log(`videoid is ${videoId}`);
    let dataShared={
      categoryId,videoId
    }
    e.dataTransfer.setData("datashared",JSON.stringify(dataShared))
  }
  useEffect(()=>{
    getCategory()
    setAddCategoryStatus(false)
    setDeleteCategoryStatus(false)
    setVideoDragRemove(false)
  },[addCategoryStatus,deleteCategoryStatus,videoDragRemove])
  //function to prevent the data on lose
  const overDrag = (e)=>{
    e.preventDefault()
  }
   //function for drop
   const videoDrop = async(e,categoryId)=>{
    console.log(`category is in ${categoryId}`);
    const videoId=e.dataTransfer.getData("videoId")
    console.log(`video is in ${videoId}`);
    //api call to get a details of purticular video that is dragged
    const {data} =await getAVideoApi(videoId)
    // console.log(data);

    //selected category
const selectedCategory=allCategory.find((item)=>item.id==categoryId)
// console.log(selectedCategory);
if(selectedCategory.allVideos.find(item=>item.id==videoId)){
  toast.error('video is already exist in this category')
}else{
  selectedCategory.allVideos.push(data)
}


//function to updae category
await updateCategory(categoryId,selectedCategory)
getCategory()
  }
  return (
    <>
      <div className='d-flex align-items-center justify-content-center'>
        <button onClick={handleShow} className='me-2 btn btn-warning w-100'> Add new Category</button>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faPen} className='text-warning me-2 mt-2' />Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary rounded p-3'>
            <p>Category Name</p>
            <Form.Group>

              <Form.Control

                type="text"
                placeholder="Enter the Category Name"
              onChange={(e)=>setCategoryName(e.target.value)}
              />

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleClose}>
            Close
          </button>
          <button className='btn btn-warning' onClick={() => {
    handleClose();
    handleCategoryAdd();
}}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
      { allCategory?.length>0?
      allCategory?.map((item)=>(<div className='border border-secondary w-100 p-3 rounded mt-4' droppable onDragOver={(e)=>overDrag(e)} onDrop={(e)=>videoDrop(e,item.id)}>
      <div className='d-flex justify-content-center align-items-center'>
        <p>{item.category}</p>
        <button onClick={(()=>handleDeleteCategory(item.id))} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrash} /></button>
      </div>
     <Row>
    {item.allVideos.length>0?
   item.allVideos.map((card)=>(
<Col draggable onDragStart={(e)=>dragStart(e,item.id,card.id)} sm={12}>
         <VedioCard displayVideo={card} ispresent={true}/> 
      </Col>
   ))
    :null}
     </Row>
    </div>))
        :<p className='text-danger fs-4'>No category added yet</p> }
          <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Category