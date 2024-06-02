import React, { useState } from 'react'
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import {Alert, Col, Container, Row} from 'react-bootstrap'
import { useGetViewerInfoMutation } from '../../services/viewerAuthApi';
// import { MDBInput,  MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';



const Section6 = () => {
  const [getViewerInfo] = useGetViewerInfoMutation();

  const [error,setError] = useState({
    status:false,
    messege:"",
    variant:""
  });

  const handleSubmit =async (e)=>{
    e.preventDefault();
    const data= new FormData(e.currentTarget);
    const actualData = {
     firstName: data.get('first-name'),
     lastName: data.get('last-name'),
     email: data.get('email'),
     subject: data.get('subject'),
     messege: data.get('messege'),
    }

    if(actualData.firstName && actualData.lastName && actualData.email && actualData.subject && actualData.messege){
    await getViewerInfo(actualData);
     document.getElementById('form').reset();
     setError({
      status:true,
      messege:"Messege Sent Successfully",
      variant:"success"
     });
    }else{
      setError({
        status:true,
        messege:"All fields are required",
        variant:"danger"
       });
    }    
  }
  return (
    <>
    <section className='section6' id='contact'>
      <Container>
        <Row className='text-center'>
          <h1>Get In Touch</h1>
        </Row>
        <Row className=' d-flex justify-content-center align-items-center mt-5 gap-3'>
          <Col md={4} className='address_section '>
            <h6>Contact</h6>
          <p>  <i className='fa-solid fa-phone'></i> : +91 6299755934</p>
          <p>  <i className='fa-solid fa-envelope'></i> : raushankashu@gmail.com</p>
          <p>  <i className='fa-solid fa-house'></i> : Patna, Bihar , India, 800010</p>
          <h6>Social Platforms</h6>
          <Col className='social-icons mt-3'>
      <ul>
      <li><a href="https://wa.me/6299755934" rel='noreferrer' target='_blank'><i class="fa-brands fa-whatsapp" ></i></a></li>
        <li><a target='_blank' rel='noreferrer' href="https://www.instagram.com/sde_raushan?igsh=MXU0dWxweW5sNXJ0Zw=="><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="https://www.facebook.com/raushankashu.kashu" target='_blank' rel='noreferrer'><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="https://www.linkedin.com/in/raushan-yaduvanshi-264607277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin"></i></a></li>
        <li><a href="https://www.github.com/Raushan1133" target='_blank' rel='noreferrer'><i class="fa-brands fa-github"></i></a></li>
        <li><a href="https://x.com/sderaushan?t=jQaGFCz9IGKMy-LRiYaSzw&s=09" rel='noreferrer' target='_blank'><i class="fa-brands fa-square-x-twitter" ></i></a></li>
      </ul>
      </Col>
      </Col>
          
          {/* Form */}
          <Col md={4} className='form_section'>
            <h6>Send Messege</h6>
          <form onSubmit={handleSubmit} id='form'>
            <Row className='mt-3'>
              <Col md={6}>
              <input className='form-control' placeholder='First Name' name='first-name' type="text" />
              </Col>
              <Col md={6} className='mt-3 mt-md-0'>
              <input className='form-control' placeholder='Last Name' name='last-name' type="text" />
              </Col>
              <Col className='mt-3 col-12'>
              <input className='form-control' placeholder='Email'  name='email' type="email" />
              </Col>
              <Col className='mt-3'>
              <input className='form-control' placeholder='Subject' name='subject' type="text" />
              </Col>
              <Col className='col-12 mt-3'>
              <textarea placeholder='Type your messege here...' name="messege" id="" className='form-control'></textarea>
              </Col>
              <Col className='d-flex justify-content-center align-items-center mt-3'>
                <button className='card-btn button' type='submit'>Send </button>
              </Col>
              
            </Row>
          </form>
          </Col>
          <Row >
          <Col className='d-flex justify-content-md-end justify-content-center'>
          {
            error.status ? <Col sm={6} ><Alert variant={error.variant}>{error.messege}</Alert> </Col> :""
          }
          </Col>
          </Row>
          </Row>
          
      </Container>
    </section>
    </>
  )
}

export default Section6;
