import {Container,Row,Col} from 'react-bootstrap';
import Me from '../../assets/Me/me.jpg'


const Section2 = () => {
  
  return (
    <section className='about-page' id='about-me'>
        <Container className='about-box'>
            <Row className='justify-content-center'>
                <Col lg={4}  >
                    <img src={Me} alt="me" className='img-fluid img-box'/>
                </Col>

                <Col lg={4} className='ms-3 mt-5 mt-lg-0'  >
                    <h3 className='mt-5 mt-lg-0'>About Me <span className='d-sm-block d-none'></span> <hr className='d-sm-none' /> </h3>
                    <p className='pt-5 pt-lg-0'>Meet me, a versatile developer skilled in both web and software development realms. With a rich command of HTML, CSS, JavaScript, React, Angular, Java, Python, and C++, I craft captivating websites and robust software solutions. With an eye for design and a knack for problem-solving, I ensure that every project meets the highest standards of quality and innovation. Whether it's building responsive web interfaces or designing complex algorithms, I bring dedication and expertise to every development endeavor, making me a valuable asset to any team.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section2
