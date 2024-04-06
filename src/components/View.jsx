import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VedioCard from './VedioCard'
import { getCategoryApi, getUploadedVideoApi, updateCategory } from '../services/callApi'

function View({uploadVideoStatus,setVideoDragRemove}) {
  const [video,setvideo]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  useEffect(()=>{   //to handle side effects
    getVideos()
 },[uploadVideoStatus,deleteVideoStatus])  //dependency -[] -content will be fetched when the page loads
  const getVideos = async () => {
    const response = await getUploadedVideoApi()
    // console.log(response);
    const {data}=response
    setvideo(data)
  }
  console.log(video);
  const dragOver =(e)=>{
    e.preventDefault()
  }
const vedioDrop=async(e)=>{
  const {categoryId,videoId}=JSON.parse(e.dataTransfer.getData('datashared'))
  console.log(categoryId,videoId);
  //get alll category
  const {data}=await getCategoryApi()
  let selectedCategory=data.find((item)=>item.id==categoryId)
  let result=selectedCategory.allVideos.filter((item)=>item.id!=videoId)
  console.log(result);
  let newCategory={
    category:selectedCategory.category,allVideos:result,id:categoryId
  }

  await updateCategory(categoryId,newCategory)
  setVideoDragRemove(true)
}


  useEffect(()=>{ 
    getVideos()
  },[uploadVideoStatus])//content will be fetched when the page loads
  return (
    <>
      <Row className='w-100' droppable ="true" onDragOver={(e)=>dragOver(e)} onDrop={(e)=>vedioDrop(e)} >
        {
          video?.length>0?
          video?.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
              <VedioCard displayVideo={item}setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col>
          )):<p className='text-warning fs-3'>No Video Uploaded yet</p>
        }

      </Row>
    </>
  )
}

export default View