import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col className='col'></Col>
        <Col md = {10}>
          <div  className='admin-txt text-right'>
            <Link to = '/login'>
              Admin
            </Link>
          </div>
          
          <div className='main'>
            <div className='text-light'>
              
                <img className='logoo' src="images/unnlogo.gif" alt='unnlogo'/>
              
              <h5>UNN E-certificate Portal</h5>
            </div><hr/>
            <h4>Get your E-certificat on our portal</h4>
            <div className='text-2'>
              <p>Default mode of E-certificate is by electronic mail/access to print (soft copy). This will attract a fixed charge of N10,000.
                You can also request for hard copy Certificate with a fixed charge of N50,000 to cover courier and other services.</p>
              <p>You can request for E-certificate more than once. Note though that you will be charged per request.</p>
            </div>
            
            <Link to = '/form'>            
              <button type="button" class="btn btn-outline-light btn-lg btn-block">Get E-Certificate</button>
            </Link>
          </div>
        </Col>
        <Col></Col>
      </Row>      
    </Container>
  )
}
