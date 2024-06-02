import { Container } from 'react-bootstrap'

const Section5 = () => {

  return (
    <>
       <section className='section5' id='education'>
        <h1 className='heading'>Education</h1>
        <Container>
        <div className="timeline-items" >
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div>
            <div className="timeline-data">2025</div>
            <div className="timeline-content">
              <h2>Bachelor of science in Information Technology</h2>
              <p>Cimage Group of institutions, Patna, Bihar 800010</p>
              <p>CGPA - Running</p>
            </div>
            </div>
          </div>
        

        {/* 12th */}

          <div className="timeline-item" >
            <div className="timeline-dot"></div>
            <div>
            <div className="timeline-data">2022</div>
            <div className="timeline-content">
            <h2>Intermediate</h2>
              <p>R.N College, Hajipur ,Vaishali, Bihar 844102</p>
              <p>CGPA - 68.8%</p>
            </div>
            </div>
          </div>
      

        {/* Graduation */}
          <div className="timeline-item col-12 col-sm-6">
            <div className="timeline-dot"></div>
            <div   >
            <div className="timeline-data">2020</div>
            <div className="timeline-content">
            <h2>High School</h2>
              <p>M.R. High School ,Chandi, Hajipur ,Vaishali, Bihar 844102</p>
              <p>CGPA - 76.4%</p>
            </div>
            </div>
          </div>
        
        </div>
        </Container>
       </section>
    </>
  )
}

export default Section5
