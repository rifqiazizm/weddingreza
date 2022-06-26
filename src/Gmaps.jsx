import React, { useState, useEffect, useRef } from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import {Animated} from 'react-animated-css'
import Peta from './images/hal5/peta.png'
import Mesjid from './images/hal5/mesjid.png'
import Alamat from './images/hal5/alamat.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from  '@fortawesome/free-solid-svg-icons';





function Mempelai() {
  return (
    <div className="opening2">
      <Container fluid>
        <Row className='justify-content-center align-items-center'>
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
          <div className="pemisah"></div>
          <div className="pemisah2"></div>

          <Animated animationIn='zoomIn'>
              <img src={Peta} alt="fontpeta" width={230} />
          </Animated>

          <Animated animationIn='zoomIn'  animationInDelay={400}>
            <div className="gmaps">

            </div>
          </Animated>

          <Animated animationIn='zoomIn'  animationInDelay={600}>
            <img src={Mesjid} alt="mesjid" width={170} />
          </Animated>

          <Animated animationIn='zoomIn'  animationInDelay={800}>
            <img src={Alamat} alt="alamat" width={170} />
          </Animated>
          <br />
          <Animated animationIn='zoomIn'  animationInDelay={1000}>
            <a href="https://www.google.com/maps/place/Masjid+Jami+Al+Ikhsan/@-6.2167141,106.4429273,16.96z/data=!4m19!1m13!4m12!1m4!2m2!1d106.8264328!2d-6.2136327!4e1!1m6!1m2!1s0x2e4201584e04e0e5:0xa6f12435ca900817!2smasjid+al+ihsan+kp+pos+sentul+balaraja!2m2!1d106.4431003!2d-6.2173446!3m4!1s0x2e4201584e04e0e5:0xa6f12435ca900817!8m2!3d-6.2173446!4d106.4431003" 
             className='btn-maps' >
            <FontAwesomeIcon  size="lg"  icon={faLocationDot}/> 
              &nbsp;
               Lihat Maps
            </a>
          </Animated>


          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Mempelai