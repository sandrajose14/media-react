import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'; // Add useState import
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { AddToHistory, deleteVideo } from '../services/callApi';

function VideoCard({ displayVideo,setDeleteVideoStatus,ispresent }) { // Corrected component name
  // console.log(displayVideo);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //fuction to add history
  const handleShow = async() =>{
    setShow(true);
    let caption = displayVideo.caption
    let url=displayVideo.embedLink
    let time = new Date()
    let timeStamp=new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'numeric',day:'numeric', hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time) 
   
    let reqBody={
      caption,url,timeStamp
    }
    const response= await AddToHistory(reqBody)
    // console.log(response);

  } 
  //function to delete
  const handleDelete = async (id) => {
    try {
      const response = await deleteVideo(id);
      console.log(response);
      setDeleteVideoStatus(true)
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };
//function to drag
const videoDrag = async(e,id)=>{
  console.log(`dragged id with ${id}`);
  e.dataTransfer.setData("videoId",id)
}


  return (
    <div className='container'>
      <Card onClick={handleShow} style={{ width: '100%' }} className='m-4' draggable onDragStart={(e)=>videoDrag(e,displayVideo.id)}>
       {!ispresent && <Card.Img  variant="top" src={displayVideo?.imageUrl} width={'100%'} height={'300px'} />}
        <Card.Body className='d-flex'>
          <Card.Text>
            {displayVideo?.caption.slice(0, 20)}
          </Card.Text>
          {!ispresent && <Button variant="danger" onClick={() => handleDelete(displayVideo?.id)} className='ms-auto'>
            <FontAwesomeIcon icon={faTrash} />
          </Button>}
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="514"
            src={`${displayVideo?.embedLink}?autoplay=1`}
            title="Nebulakal - Travel Song | Manjummel Boys |Chidambaram | Sushin Shyam,Pradeep,Anwar Ali |Parava Films"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoCard; // Corrected export statement
