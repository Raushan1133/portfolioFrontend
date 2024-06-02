import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HTML from "../../assets/skills/htm-png.png";
import CSS from "../../assets/skills/css-png.png";
import JS from "../../assets/skills/js-png.png";
import Reactjs from "../../assets/skills/react-png.png";
import Mongo from "../../assets/skills/mongo.png";
import Node from "../../assets/skills/node-img.png";
import Express from "../../assets/skills/express.png";
import Tailwind from "../../assets/skills/tailwind.png";
import Bootstrap from "../../assets/skills/bootstrap-wbg.png";
import C from "../../assets/skills/c-png.png";
import CPP from "../../assets/skills/cpp-png.png";
import Java from "../../assets/skills/java-png.png";
import Python from "../../assets/skills/python-png.png";
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';


const Skills = () => {
  return (
    <section className="skill_section">
      <Container>
        <Row>
          <Col>
            <h1>Web Technologies</h1>
          </Col>
        </Row>
        <Row className="mt-3 gap-4 justify-content-start align-items-center">
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={HTML} className="img-fluid" alt="" />
          </Col>
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={CSS} className="img-fluid" alt="" />
          </Col>
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={JS} className="img-fluid" alt="" />
          </Col>
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={Reactjs} className="img-fluid" alt="" />
          </Col>
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={Mongo} className="img-fluid" alt="" />
          </Col>
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={Node} className="img-fluid" alt="" />
          </Col>
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={Express} className="img-fluid" alt="" />
          </Col>
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={Tailwind} className="img-fluid" alt="" />
          </Col>
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={Bootstrap} className="img-fluid" alt="" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h1>Programming Languages</h1>
          </Col>
        </Row>
        <Row className="gap-5 mt-3">
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={C} className="img-fluid" alt="" />
          </Col>
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={CPP} className="img-fluid" alt="" />
          </Col>

          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={Java} className="img-fluid" alt="" />
          </Col>
          <Col sm={4} md={3} lg={1} className="d-flex justify-content-center align-items-center">
            <img src={Python} className="img-fluid" alt="" />
          </Col>
        </Row>

        {/* <Row>
          <h1 className="mt-3">Progress</h1>
          <div class="d-flex justify-content-center">
            <div class="col-md-6">
              <div class="progress blue">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">HTML 90% </div>
              </div>
             
            </div>

            <Col>
          <div class="progress yellow">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">37.5%</div>
              </div>
          </Col>
          </div>
          
        </Row> */}

        <Row className="mt-5 ">
          <h1>Progress</h1>
        </Row>
        
        <Row className="pb-5 progress_bars">
        <Col md={4}>
          <p>Web</p>
          <div className="text-center fw-bold  mb-1 text-primary">Javascript</div>
        <MDBProgress className="mb-2">
        <MDBProgressBar striped width='87' valuemin={0} valuemax={100} />
      </MDBProgress>
       
      <div className="text-center fw-bold  text-success">React JS</div>
      <MDBProgress className="mb-2">
        <MDBProgressBar striped bgColor='success' width='75' valuemin={0} valuemax={100}></MDBProgressBar>
      </MDBProgress>
      
      <div className="text-center fw-bold  text-info">Node JS</div>
      <MDBProgress className="mb-2">
        <MDBProgressBar striped bgColor='info' width='80' valuemin={0} valuemax={100} />
      </MDBProgress >
      <div className="text-center fw-bold  text-warning">Express JS</div>
      <MDBProgress className="mb-2">
        <MDBProgressBar striped bgColor='warning' width='60' valuemin={0} valuemax={100} />
      </MDBProgress>
      <div className="text-center fw-bold  text-danger">Mongo DB</div>
      <MDBProgress>
        <MDBProgressBar striped bgColor='danger' width='90' valuemin={0} valuemax={100} />
      </MDBProgress>
        </Col>
        <Col md={4}>
          <p>Programming</p>
          <div className="text-center fw-bold  mb-1 text-primary">C</div>
        <MDBProgress className="mb-2">
        <MDBProgressBar striped width='87' valuemin={0} valuemax={100} />
      </MDBProgress>
       
      <div className="text-center fw-bold  text-success">C++</div>
      <MDBProgress className="mb-2">
        <MDBProgressBar striped bgColor='success' width='75' valuemin={0} valuemax={100}></MDBProgressBar>
      </MDBProgress>
      
      <div className="text-center fw-bold  text-info">Java</div>
      <MDBProgress className="mb-2">
        <MDBProgressBar striped bgColor='info' width='80' valuemin={0} valuemax={100} />
      </MDBProgress >
      <div className="text-center fw-bold  text-warning">Python</div>
      <MDBProgress className="mb-2">
        <MDBProgressBar striped bgColor='warning' width='60' valuemin={0} valuemax={100} />
      </MDBProgress>
        </Col>

        <Col md={4}>
          <p>Extra</p>
          <div className="text-center fw-bold  mb-1 text-primary">Git & GitHub</div>
        <MDBProgress className="mb-2">
        <MDBProgressBar striped width='87' valuemin={0} valuemax={100} />
      </MDBProgress>
       
      <div className="text-center fw-bold  text-success">Adobe Photoshop</div>
      <MDBProgress className="mb-2">
        <MDBProgressBar striped bgColor='success' width='75' valuemin={0} valuemax={100}></MDBProgressBar>
      </MDBProgress>
      
      <div className="text-center fw-bold  text-info">Figma</div>
      <MDBProgress className="mb-2">
        <MDBProgressBar striped bgColor='info' width='80' valuemin={0} valuemax={100} />
      </MDBProgress >
      <div className="text-center fw-bold  text-warning">Media Query</div>
      <MDBProgress className="mb-2">
        <MDBProgressBar striped bgColor='warning' width='60' valuemin={0} valuemax={100} />
      </MDBProgress>
        </Col>
        </Row>

        
      </Container>
    </section>
  );
};

export default Skills;
