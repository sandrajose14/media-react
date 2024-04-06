import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css'; 

function Footer() {
  return (
    <div className='footer-container container mt-5'>
      <div className='footer-content'>
        <div className='website'>
          <FontAwesomeIcon icon={faVideo} style={{ color: 'orange', fontSize: '30px', marginRight: '5px' }} />
          <span style={{ color: 'white', fontSize: '30px' }}>Media Player</span>
          <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur possimus omnis, illo explicabo ab assumenda labore deleniti .</p>
        </div>
        <div className='footer-column'>
          <h4 className='links mb-4'>Links</h4>
          <div className=''>
            <p><Link to={'/'}>Landing page</Link></p>
            <p><Link to={'/home'}>Home</Link></p>
            <p><Link to={'/watchhistory'}>Watch History</Link></p>
          </div>
        </div>
        <div className='footer-column'>
          <h4 className='links mb-4'>Guides</h4>
          <div className='' style={{ color: 'white' }}>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>
        <div className='contact footer-column'>
          <h4>Contact Us</h4>
          <input className='rounded px-3 p-1' style={{ border: 'none' }} type="text" placeholder='Enter your Email ID' />
          <button className='rounded px-3 ms-2 bg-warning p-1 mt-2' style={{ border: 'none', color: 'white' }}>Subscribe</button>
          <div className='icon fs-4 mt-2 ms-4' style={{ color: 'white' }}>
            <i className="fab fa-instagram me-5"></i>
            <i className="fab fa-twitter me-5"></i>
            <i className="fab fa-linkedin me-5"></i>
            <i className="fab fa-facebook me-5"></i>
          </div>
        </div>
      </div>
      <p className='mt-4'>Copyright © 2023, Media-Player built with React</p>
    </div>
  )
}

export default Footer;
