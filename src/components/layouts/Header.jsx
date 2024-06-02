import React, { useState } from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import '../../Styles/HeaderStyle.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'

const Header = () => {

  const [nav,setNav] = useState(false);

  // Scroll navbar
  const changeValueOnScroll = ()=>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100? setNav(true):setNav(false);
  }

  window.addEventListener("scroll",changeValueOnScroll);

  // let NavBar = document.querySelectorAll('.link');
  // console.log(NavBar);
  // let collapse=document.querySelector('.navbar-collapse.collapse');
  // console.log(collapse);

  // Navbar.forEach(element => {
  //   element.addEventListener("click",()=>{
  //     collapse.classList.remove('show');
  // }); 
  // });
  
  // Hiding navbar on click
  let navBar = document.querySelectorAll('.link');
  let collapse=document.querySelector('.navbar-collapse.collapse');
  navBar.forEach(element=>{
    element.addEventListener("click",()=>{
      collapse.classList.remove('show');
    });
  });

  // if(collapse.classList[2] === 'show'){
  //   window.addEventListener('click',()=>{
  //     collapse.classList.remove('show');
  //   })
  // }


  return (
    <header>
         <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
      <Container>

        <Navbar.Brand href="#home">
          <Link to='/' className='logo'>
          <img src={Logo} alt="logo" className='img-fluid' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> 
          <Nav className="ms-auto nav-box">
            {/* <Nav.Link as={Link}  to='/'>Home</Nav.Link>
            <Nav.Link as={Link}  to='about'>About Me</Nav.Link>
            <Nav.Link as={Link}  to='#skills'>Skills</Nav.Link>
            <Nav.Link as={Link}  to='/projects'>Projects</Nav.Link>
            <Nav.Link as={Link}  to='/team'>Team</Nav.Link>
            <Nav.Link as={Link}  to='/contact'>Contact</Nav.Link>  */}
            <a href="#home" className='link'>Home</a> 
            <a href="#about-me" className='link'>About Me</a>  
            <a href="#projects" className='link'>Projects</a>   
            <a href="#skills" className='link'>Skills</a> 
            <a href="#education" className='link'>Education</a> 
            <a href="#contact" className='link'>Contact Me</a>  
          </Nav>
         
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </header>
  )
}

export default Header;
