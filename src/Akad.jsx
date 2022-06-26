import React, { useState, useEffect, useRef } from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import {Animated} from 'react-animated-css'
import Bunga from './images/hal4/bunga.png'
import Doa from './images/hal4/doa.png'
import Akadimg from './images/hal4/akad.png'
import Walimatul from './images/hal4/walimatul.png'
import Tanggal from './images/hal4/tanggal.png'
import Hitung from './images/hal4/hitung.png'




const Akad = () => {

    const [timerDays, settimerDays] = useState('00')
    const [timerHours, settimerHours] = useState('00')
    const [timerMinutes, settimerMinutes] = useState('00')
    const [timerSec, settimerSec] = useState('00')

    let interval = useRef()

    const timer = () => {
       const countdown  =  new Date('July 17, 2022 00:11:00').getTime()
        console.log(countdown)
        interval = setInterval(() => {
            const now = new Date().getTime();
            const dist = countdown - now;

            const days = Math.floor(dist / (1000 * 60 * 60 * 24));
            const hours = Math.floor(dist % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60 ))
            const minute = Math.floor(dist % (1000 * 60 * 60) / (1000 * 60))
            const sec = Math.floor(dist % (1000 * 60) / 1000);

            if (dist < 0 ) {
                clearInterval(interval.current)
            } else {
                settimerDays(days)
                settimerHours(hours)
                settimerMinutes(minute)
                settimerSec(sec)
            }

        },1000)



    }

    useEffect(() => {
        timer();
        return () => {
            clearInterval(interval.current)
        }
    })
 
    
  return (
    <div className='opening2'>
        <Container fluid>
            <Row className='justify-content-center align-items-center'>
                <Col  md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="pemisah2"></div>
                    <div className="pemisah2"></div>


                        <Animated animationIn='zoomIn' >
                            <img src={Bunga} alt="kembang" width={80} height={90}  />
                        </Animated>
                        <Animated animationIn='zoomIn' animationInDelay={400}>
                            <img src={Tanggal} alt="tanggal" width={180} height={80}  />
                        </Animated>
                        <Animated animationIn='zoomIn'  animationInDelay={600}>
                            <img src={Akadimg} style={{marginTop: '40px'}} alt="akad" width={150} height={70}  />
                        </Animated>
                        <Animated animationIn='zoomIn'  animationInDelay={800}>
                            <img src={Walimatul} style={{marginTop: '10px'}}  alt="walimatul" width={150} height={70}  />
                        </Animated>
                        <Animated animationIn='zoomIn'  animationInDelay={1000}>
                            <img src={Doa} style={{marginTop: '10px'}}  alt="doa" width={250} height={100}  />
                        </Animated>
                        <Animated animationIn='zoomIn'  animationInDelay={1200}>
                            <img src={Hitung} style={{marginTop: '10px'}}  alt="hitung" width={200} height={40}  />
                        </Animated>
                      
                        <Row >

                         
                            <Col  className="d-flex flex-column justify-content-center align-items-center">
                                <h2 className='timer'>
                                    {timerDays}
                                </h2>
                                <p className='ket'>
                                    hari 
                                </p>
                            </Col>
                            <Col  className="d-flex flex-column justify-content-center align-items-center">
                                <h2 className='timer'>
                                    {timerHours}
                                </h2>
                                <p className='ket'>
                                    jam 
                                </p>
                            </Col>
                            <Col  className="d-flex flex-column justify-content-center align-items-center">
                                <h2 className='timer'>
                                    {timerMinutes}
                                </h2>
                                <p className='ket'>
                                    menit 
                                </p>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center align-items-center">
                                <h2 className='timer'>
                                    {timerSec}
                                </h2>
                                <p className='ket'>
                                    detik 
                                </p>
                            </Col>


                            </Row>

                </Col>
            </Row>
            

        </Container>
    </div>
  )
}

export default Akad;