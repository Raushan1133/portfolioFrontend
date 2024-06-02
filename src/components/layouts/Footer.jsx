import {useState,useEffect} from 'react'

const Footer = () => {
    // Scroll state
    const [isVisible, setIsVisible] =useState(false);

    const scrollTop = ()=>{
      window.scrollTo({top:0,
      behavior:'smooth'});
    }
  
    const listenToScroll = ()=>{
      let heightToHidden = 250;
      const windowScroll = document.body.scrollTop|| document.documentElement.scrollTop;
  
      windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
    }
  
    useEffect(()=>{
      window.addEventListener("scroll",listenToScroll);
    })
  return (
    <footer className=' p-3 ' style={{background:'var(--secondary-bg)'}}>
      <h6 style={{color:'var(--secondary-text)'}} className='text-center'>All Copyrights Reserved @Raushan Yaduvanshi-2024</h6>
      {
      isVisible && (
        <div className='scroll_top' onClick={scrollTop} >
    <i className='fa-solid fa-arrow-up'></i>
    </div>
      )
    }
    </footer>
    
  )
}

export default Footer
