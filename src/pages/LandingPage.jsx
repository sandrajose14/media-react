
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigate = useNavigate()
  return (
   
  <>
     <Row>
      <Col lg={1}></Col>
      <Col lg={5}>
        <h3 className='mt-5'>Welcome to <span>Media Player</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a minima perferendis. Assumenda dolores non pariatur, minima eligendi maiores dicta iste exercitationem voluptatibus. Ad modi voluptatibus totam consequatur fugiat veniam! Lorem ipsum,?</p>
        <button onClick={()=>navigate('/home')} className='btn-warning rounded text-white border border-0 p-1'>Get Started <i className="fa-solid fa-arrow-right" ></i></button>

      </Col>
      <Col lg={1}></Col>
      <Col lg={5}>
        <img src="images/gif.gif" height='280px' alt="img 1" />
      </Col>
     </Row>
     <div className='cotainer d-flex justify-content-center align-items-center mt-5 flex-column'>
      <h3>Features</h3>
      <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
      <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" style={{width:'100%',height:'300px'}} />
      <Card.Body className='text-white'>
        <Card.Title className='text-center mb-2'>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" style={{width:'100%',height:'300px'}} />
      <Card.Body className='text-white mb-2'>
        <Card.Title className='text-center'>Categorized video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" style={{width:'100%',height:'300px'}} />
      <Card.Body className='text-white mb-2'>
        <Card.Title className='text-center'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
     </div>
<div className='d-flex justify-content-center align-items-center w-100'>
       <Row className='container d-flex justify-content-center align-items-center border border-1 border-light m-5'>
    <Col lg={6}>
      <div>
        <h4 className='text-warning mx-5 mt-4 fs-3'>Simple, Fast, and Powerful</h4>
        <p style={{textAlign:'justify',lineHeight:'20px'}} className='ms-5 mt-4'><span className='text-white fw-bold fs-5'>Play Everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium iusto consequatur laudantium esse aliquid beatae, omnis quidem.</p>
      </div>
      <div>
        <p style={{textAlign:'justify',lineHeight:'20px'}} className='ms-5'><span className='text-white fw-bold fs-5'>Play Everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium iusto consequatur laudantium esse aliquid beatae, omnis quidem.</p>
      </div>
      <div>
        <p style={{textAlign:'justify',lineHeight:'20px'}} className='ms-5 mb-5'><span className='text-white fw-bold fs-5'>Play Everything : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium iusto consequatur laudantium esse aliquid beatae, omnis quidem.</p>
      </div>
    </Col>
    <Col lg={6}>
    <iframe className='ms-5 me-5' width="480" height="275" src="https://www.youtube.com/embed/OGwyhjk_fhE" frameborder="0" allowfullscreen></iframe>
  </Col>
  
  </Row>
</div>

  </>
   
  )
}

export default LandingPage