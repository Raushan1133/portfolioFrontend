import { React, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { MDBRadio } from "mdb-react-ui-kit";
import Web from "../../assets/skills/webb.jpg";
import Programming from "../../assets/skills/programming.jpg";
import Networking from "../../assets/skills/networking.jpg";
import ProblemSolving from "../../assets/skills/problem-solving.jpg";
import Communication from "../../assets/skills/communication.jpg";
import Adaptability from "../../assets/skills/Adaptability.jpg";
import Presentation from "../../assets/skills/presentation.png";
import SoftNetworking from "../../assets/skills/soft-networking.jpg";
import Skills from "./Skills";

const Section4 = () => {
  const [enabled, setEnabled] = useState(true);
  const [enabled1, setEnabled1] = useState(false);
  const [value,setValue] =useState(false);
  const btn = useRef(null);
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);
  return (
    <section className="skill-section" id="skills">
      <Container className="skill-container">
        <Row>
          <div className="d-flex gap-3 justify-content-sm-end justify-content-center pb-sm-0 pb-3">
            <label className="text-primary fw-bold" htmlFor="radioNoLabell">
              Technical Skills
            </label>
            <MDBRadio
              name="radioNoLabel"
              id="radioNoLabell"
              value=""
              defaultChecked
              aria-label="..."
              onChange={() => {
                setEnabled(true);
                setEnabled1(false);
              }}
            />
            <label className="text-primary fw-bold" htmlFor="radioNoLabell">
              Soft Skills
            </label>
            <MDBRadio
              name="radioNoLabel"
              id="radioNoLabel2"
              value=""
              aria-label="..."
              onChange={() => {
                setEnabled(false);
                setEnabled1(true);
                setValue(false)
              }}
            />
          </div>
        </Row>
        {enabled && (
          <>
            <Row>
              <Col sm={10}>
                <h1 data-aos="fad-down">Technical Skills</h1>
                <span></span>
              </Col>
            </Row>
            <Row className="my-4">
              <Col xl={3} md={6}>
                <Card className="card">
                  <Card.Img variant="top" className="img img-fluid" src={Web} />
                  <Card.Body>
                    <Card.Title className="title">Web Developement</Card.Title>
                    <Card.Text className="para text-align-justify">
                      I am a proficient web developer specializing in HTML, CSS,
                      and JavaScript. With a keen eye for user-friendly design
                      and a commitment to staying abreast of the latest industry
                      trends, I create tailored websites that meet clients'
                      unique needs. Passionate about technology and driven by a
                      love for problem-solving, I bring creativity and
                      dedication to every project I undertake.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col xl={3} md={6} className="mt-5 mt-md-0">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    className="img img-fluid"
                    src={Programming}
                  />
                  <Card.Body>
                    <Card.Title className="title">Programming</Card.Title>
                    <Card.Text className="para pb-3">
                      I'm a skilled programmer proficient in languages like
                      Python, Java, and C++. With a knack for problem-solving
                      and a passion for innovation, I craft efficient solutions
                      and user-friendly applications. Whether working
                      independently or in teams, I thrive on challenges and
                      continuously seek growth opportunities in the dynamic
                      world of technology.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col xl={3} md={6} className="mt-5 mt-xl-0">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    fluid
                    className="img img-fluid"
                    src={Networking}
                  />
                  <Card.Body>
                    <Card.Title className="title">
                      Computer Networking
                    </Card.Title>
                    <Card.Text className="para">
                      My computer networking skills ensure robust digital
                      infrastructures. Proficient in configuring and
                      troubleshooting networks, I optimize connectivity and
                      security. With expertise in protocols and routing, I
                      design scalable solutions for efficient data transmission.
                      Adaptability to evolving technologies allows me to
                      innovate and ensure network resilience.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 4 */}

              <Col xl={3} md={6} className="mt-5 mt-xl-0">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    className="img img-fluid"
                    src={ProblemSolving}
                  />
                  <Card.Body>
                    <Card.Title className="title">
                      Problem-Solving Skills
                    </Card.Title>
                    <Card.Text className="para pb-5">
                      My problem-solving prowess is a cornerstone of my
                      professional toolkit. I adeptly dissect complex
                      challenges, offering innovative solutions with strategic
                      foresight. Whether addressing immediate concerns or
                      driving long-term improvements, my methodical approach
                      ensures effective outcomes.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
          <Col className="d-flex justify-content-center">
            <Link className="card-btn" ref={btn}  onClick={()=>{setValue(!value)}}>
              View Analysis<i class="fa-solid fa-eye ms-2"></i>
            </Link>
          </Col>
        </Row>
          </>
        )}

        {enabled1 && (
          <>
            <Row>
              <Col sm={10}>
                <h1 data-aos="fad-down">Soft Skills</h1>
                <span></span>
              </Col>
            </Row>
            <Row className="my-4">
              <Col xl={3} md={6} data-aos="flip-up">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    className="img img-fluid"
                    src={Communication}
                  />
                  <Card.Body>
                    <Card.Title className="title">
                      Communication Skill
                    </Card.Title>
                    <Card.Text className="para text-align-justify">
                      Effective communication skills are crucial for me. They
                      enable me to convey ideas clearly, listen actively, and
                      adapt to different audiences. Using verbal, written, and
                      non-verbal cues, I foster understanding and positive
                      relationships in both personal and professional contexts,
                      ultimately leading to successful outcomes.{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col xl={3} md={6} className="mt-5 mt-md-0" data-aos="flip-up">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    className="img img-fluid"
                    src={Adaptability}
                  />
                  <Card.Body>
                    <Card.Title className="title">Adaptability</Card.Title>
                    <Card.Text className="para">
                      Adaptability is a trait I hold dear to myself. It empowers
                      me to navigate life's twists and turns with resilience. I
                      embrace change, readily adjusting to new situations and
                      challenges. Through flexibility and an open mindset, I
                      thrive in dynamic environments, continually evolving and
                      growing along the way.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col xl={3} md={6} className="mt-5 mt-xl-0" data-aos="flip-up">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    fluid
                    className="img img-fluid"
                    src={Presentation}
                  />
                  <Card.Body>
                    <Card.Title className="title">
                      Presentation skill
                    </Card.Title>
                    <Card.Text className="para ">
                      Presentation skills are a valuable asset for me. With
                      confidence and clarity, I effectively convey my ideas to
                      audiences. I strive for engaging delivery, using visuals
                      and storytelling to captivate attention. Through practice
                      and refinement, I continually enhance my ability to
                      communicate persuasively and leave a lasting impression.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 4 */}

              <Col xl={3} md={6} className="mt-5 mt-xl-0" data-aos="flip-up">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    className="img img-fluid"
                    src={SoftNetworking}
                  />
                  <Card.Body>
                    <Card.Title className="title">Networking</Card.Title>
                    <Card.Text className="para">
                      Networking is vital in my professional endeavors. I
                      actively cultivate authentic connections, recognizing
                      their potential for mutual growth. Through genuine
                      engagement and strategic relationship-building, I expand
                      my network, fostering valuable collaborations and
                      opportunities for advancement in my career.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}

        
      </Container>
      
      {
        value?<Skills/>:null
      }
      {/* {
        value?btn.current.innerHTML='Hide Analytics': btn.current.innerHTML='Show Analytics <i class="fa-solid fa-eye ms-2">'
      } */}
      
     
    </section>
  );
};

export default Section4;
