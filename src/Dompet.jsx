import React, { useState} from 'react'
import {Container,Row,Col,Modal,Button } from 'react-bootstrap'
import {Animated} from 'react-animated-css'
import Bunga from './images/hal6/bunga.png'
import Nama from './images/hal6/nama.png'
import Isi1 from './images/hal6/isi1.png'
import Isi2 from './images/hal6/isi2.png'
import Keluarga from './images/hal6/keluaga.png'

const Dompet = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="btn-maps" onClick={handleShow}>
         Amplop Digital
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Amplop Digital</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="rek">
                Bagi yang ingin mengutarakan rasa syukur dan berbagi kebahagiaan secara materi 
                dengan mempelai silahkan bisa transfer ke
            </p>
            <p className="rek2">
             Rekening BCA
            </p>
            <p className="ket2" style={{fontSize:'20px'}}>
            89151 80732
            </p>
            <p className="rek2">
             Muhammad Reza Azmi
            </p>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
        
          </Modal.Footer>
        </Modal>
      </>
    );
  }


const Mempelai = () => {
  return (
    <div className="opening2">
      <Container fluid>
        <Row className='justify-content-center align-items-center'>
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
          <div className="pemisah2"></div>
          <div className="pemisah2"></div>

          <Animated animationIn='zoomIn'>
              <img src={Bunga} alt="kembang" width={100} />
          </Animated>


          <Animated animationIn='zoomIn'  animationInDelay={400}>
            <img src={Isi1} alt="mesjid" width={280} />
          </Animated>

          <Animated animationIn='zoomIn'  animationInDelay={600}>
            <img  src={Isi2} alt="doa" width={300} height={150} />
          </Animated>
   

          <Animated animationIn='zoomIn'  animationInDelay={800}>
            <p className="ket2">Wasalamualaikum warahmatullahi wabarakatuh</p>
          </Animated>
          <br />
          
          <Animated animationIn='zoomIn'  animationInDelay={1000}>
            <p className="ket2">Kami yang berbahagia,</p>
          </Animated>
          <Animated animationIn='zoomIn'  animationInDelay={1200}>
          <img src={Nama} alt="alamat" width={200}/>
          </Animated>
          <Animated animationIn='zoomIn'  animationInDelay={1400}>
          <img src={Keluarga} alt="alamat" width={300}/>
          </Animated>
          <br />
          <br />

          <Animated animationIn='zoomIn'  animationInDelay={2000}>
            <Dompet />
          
          </Animated>

          </Col>
        </Row>
      </Container>
     
    </div>
  )
}

export default Mempelai