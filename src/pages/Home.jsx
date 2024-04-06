import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View' 
import Category from '../components/Category'
import {Link} from 'react-router-dom'
import './home.css'
function Home() {
  const [uploadVideoStatus, setUploadVideoStatus]=useState({})
  const[videoDragRemove,setVideoDragRemove]=useState(false)
  return (
    <>
    <div className='container d-flex justify-content-between align-items-center mt-5'>
      <Add setUploadVideoStatus={setUploadVideoStatus}/>
      <Link className='mb-4' id='link'>Watch History</Link>
    </div>
    <div className='row contaniner-fluid'>
      <div className="col-md-9">
          <h4 className='ms-5 mt-3'>All Videos</h4>
          <View uploadVideoStatus={uploadVideoStatus} setVideoDragRemove={setVideoDragRemove}/>
      </div>
      <div className="col-md-3">
        <Category setVideoDragRemove={setVideoDragRemove}
        videoDragRemove={videoDragRemove}/>
      </div>
    </div>
    </>
  )
}

export default Home