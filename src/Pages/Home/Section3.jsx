import {React} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Ecommerce from '../../assets/projects/ecommerce.png'
import SocialMedia from '../../assets/projects/socialMedia.png'
import chatApplication from '../../assets/projects/chatApplication.jpg'
import Weather from '../../assets/projects/weather.avif'

const Section3 = () => {

  return (
    <section className='project-section'  id='projects'>
        <Container className='project-container'>
            <Row>
                <Col >
                <h1>Recent Projects <span className='d-sm-block d-none'></span> <hr className='d-sm-none'/></h1>
                </Col>
            </Row>
            <Row className='mt-5'>
                {/* Card 1 */}
                <Col  md={6} data-aos='fad-right'>
                <MDBCard className='card flex-sm-row '>
      <MDBRipple  rippleTag='div' className='bg-image hover-overlay card-img'>
        <div>
        <MDBCardImage src={Ecommerce} className='img-fluid img'    alt='ecommerce' />
        </div>
      </MDBRipple>
      <div className='cardbody'>
      <MDBCardBody>
        <MDBCardTitle className='title'>E-commerce Application</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div className='p-3 text-center'>
        <Link className='card-btn mt-5'><span>View</span><i className="fa-solid fa-eye ms-3"></i></Link>
        </div>
      </MDBCardBody>
      </div>
    </MDBCard>
    </Col>

    {/* Card 2 */}
    <Col  md={6} lg={5} className='mt-md-0 mt-5' >
                <MDBCard className='card flex-sm-row '>
      <MDBRipple rippleTag='div' className='bg-image hover-overlay card-img'>
        <div className='d-flex align-items-center justify-content-center'>
        <MDBCardImage src={SocialMedia} className='img-fluid img' alt='social-media' />
        </div>
      </MDBRipple>
      <div className='cardbody'>
      <MDBCardBody>
        <MDBCardTitle className='title'>Social Media Application</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div className='p-3 text-center'>
        <Link className='card-btn mt-5'><span>View</span><i className="fa-solid fa-eye ms-3"></i></Link>
        </div>
      </MDBCardBody>
      </div>
    </MDBCard>
    </Col>

    {/* Card 3 */}
    <Col  md={6} lg={5} className='  mt-sm-3 mt-5' data-aos='fad-right'>
                <MDBCard className='card flex-sm-row '>
      <MDBRipple rippleTag='div' className='bg-image hover-overlay card-img'>
        <div>
        <MDBCardImage src={chatApplication} className='img-fluid img' fluid alt='ecommerce' />
        </div>
      </MDBRipple>
      <div className='cardbody'>
      <MDBCardBody>
        <MDBCardTitle className='title'>Chat Application</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div className='p-3 text-center'>
        <Link className='card-btn mt-5'><span>View</span><i className="fa-solid fa-eye ms-3"></i></Link>
        </div>
      </MDBCardBody>
      </div>
    </MDBCard>
    </Col>

    {/* Card 4 */}
    <Col  md={6} className='mt-sm-3 mt-5' >
                <MDBCard className='card flex-sm-row '>
      <MDBRipple  rippleTag='div' className='bg-image hover-overlay card-img'>
        <div>
        <MDBCardImage src={Weather} className='img-fluid img' fluid alt='ecommerce' />
        </div>
      </MDBRipple>
      <div className='cardbody'>
      <MDBCardBody>
        <MDBCardTitle className='title'>Weather Forcast Application</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div className='p-3 text-center'>
        <Link className='card-btn mt-5'><span>View</span><i className="fa-solid fa-eye ms-3"></i></Link>
        </div>
      </MDBCardBody>
      </div>
    </MDBCard>
    </Col>

    </Row>
    </Container>
    </section>
  )
}

export default Section3;
