import React , {useState} from 'react'
import { Animated } from 'react-animated-css';
import { Container,Row,Col } from 'react-bootstrap';
import Nama from './images/Nama.png';
import Bunga from './images/Bunga.png';
import Inv from './images/invited.png';
import Song from './qosidah.mp3'
import { Link } from 'react-router-dom';

function Opening() {

    const [audio, setaudio] = useState({
        lagu : new Audio(Song)
    })

    const playAudio = () => {
        audio.lagu.play();
    }

 
  return (
    <div className="opening">
        <Container >
            <Row className="justify-content-center align-items-center">

                <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                  
                    <div className="pemisah"></div>
                    <div className="pemisah"></div>
                    
                   
                    <Animated animationIn='zoomIn'  >
                 
                        <img src={Bunga} alt="Bunga Mempelai" width={200} height={230} />

                

                    </Animated>
                


                    <div className="d-flex flex-column justify-content-between align-items-center mempelai">
                        <Animated animationIn='zoomIn' animationInDelay={300}>
                            <img src={Nama} alt="Nama Mempelai"width={210} height={100} />
                        </Animated>
                        <Animated>
                    <div className="pemisah2"></div>

                        <Link to="/app"><button onClick={playAudio} className="btn-opening" >Buka undangan</button></Link>
                        </Animated>
                    <div className="pemisah2"></div>
                    <div className="pemisah"></div>

                        <Animated animationIn='zoomIn' animationInDelay={600}>
                            <img className="s" src={Inv} alt="invite Mempelai" height={70} />
                        </Animated>
                    </div>

                </Col>
            </Row>
        </Container>
    </div>
  )
}


function OpeningOld() {
    return (
      <div className="opening">
          <Container >
              <Row className="justify-content-center align-items-center">
  
                  <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                    
                      <div className="pemisah"></div>
                      <div className="pemisah"></div>
                      
                     
                      <Animated animationIn='zoomIn'  >
                   
                          <img src={Bunga} alt="Bunga Mempelai" width={200} height={230} />
  
                  
  
                      </Animated>
                  
  
  
                      <div className="d-flex flex-column justify-content-between align-items-center mempelai">
                          <Animated animationIn='zoomIn' animationInDelay={300}>
                              <img src={Nama} alt="Nama Mempelai"width={210} height={100} />
                          </Animated>
                          <Animated>
                      <div className="pemisah2"></div>
  
                          <Link to="/app"><button  className="btn-opening" >Buka undangan</button></Link>
                          </Animated>
                      <div className="pemisah2"></div>
                      <div className="pemisah"></div>
  
                          <Animated animationIn='zoomIn' animationInDelay={600}>
                              <img className="s" src={Inv} alt="invite Mempelai" height={70} />
                          </Animated>
                      </div>
  
                  </Col>
              </Row>
          </Container>
      </div>
    )
  }
  

export default Opening;