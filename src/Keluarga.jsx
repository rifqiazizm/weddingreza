import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Bismillah from './images/hal2/bismillah.png';
import { Animated} from 'react-animated-css';
import Ucapan from './images/hal2/Isi.png';
import Mertua from './images/hal2/mertua.png';
import Reza from './images/hal2/reza.png';
import Hesti from './images/hal2/hesti.png';
import Ortu from './images/hal2/ortu.png';
import Love from './images/hal2/love.png';




const Keluarga = () => {
  return (
    <div className='opening2'>
        <Container fluid>
            <Row className='justify-content-center align-items-center'>
                <Col  md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="pemisah"></div>
                    <div className="pemisah2"></div>

                    <Animated animationIn='zoomIn' >
                        <img src={Bismillah} alt="Bismillah" width={140} height={60} />
                    </Animated>
                    <Animated animationIn='zoomIn' >
                        <img src={Ucapan} alt="ucapan"  width={350} height={110} />
                    </Animated>
                    <Animated animationIn='zoomIn' animationInDelay={200} >
                        <img src={Hesti} alt="hesti" width={280} height={40} />
                    </Animated>
                    <Animated animationIn='zoomIn'  animationInDelay={400} >
                        <img src={Mertua} alt="mertua" width={280} height={25} />
                    </Animated>
                    <Animated animationIn='zoomIn'  animationInDelay={600} >
                        <img className='gambar' src={Love} alt="love" width={50} height={30} />
                    </Animated>
                    <Animated animationIn='zoomIn'  animationInDelay={800} >
                        <img className='reza' src={Reza} alt="reza" width={300} height={40} />
                    </Animated>
                    <Animated animationIn='zoomIn'  animationInDelay={1000} >
                        <img className='ortu' src={Ortu} alt="ortu" width={340} height={27} />
                    </Animated>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Keluarga