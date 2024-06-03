import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {Typewriter} from "react-simple-typewriter";
import Me from '../../assets/Me/Raushan.png'

const Section1 = () => {
  return (
    <>
    <section className='section1' id='home'>
      <Container>
        <Row className='justify-content-md-around  align-items-center banner pb-md-5'>
          <Col md={4} className='text-box  order-2 order-md-1' >
            <h3 className='mt-3 sm-mt-0'>Hello !</h3>
            <h1>I'M <span style={{color:'cyan'}}>RAUSHAN KUMAR</span></h1>
            
            <h3 className='typing'>I am <Typewriter
            words={['Web Developer', 'UI/UX Designer', 'Programmer', 'Developer']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
            /></h3>

            <div className='buttons d-flex justify-content-between mt-5'>
              <a href='src\assets\skills\Adaptability.jpg' download="Raushan-resume" className='main-btn'>Download CV <i className="fa-regular fa-file ms-2"></i></a>
              <a href='#contact' className='main-btn ms-md-5 ms-xxl-0'>Hire Me</a>
            </div>
          </Col>


          {/* <h1>Image Section</h1> */}
          <Col md={4} className='img-box d-flex justify-content-center align-items-center order-1 order-md-2'>
            <img src={Me} alt="me"  className='img-fluid img text-center' />
          </Col>
        </Row>
      </Container>

    </section>
    </>
  )
}

export default Section1
