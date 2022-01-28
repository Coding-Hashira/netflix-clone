import React, {useEffect, useState} from 'react';
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false)
    useEffect(()=>{

        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 100){
                handleShow(true)
            } else handleShow(false)
        })

        return ()=>{
            window.removeEventListener('scroll')
        }
    }, [])
  return <div className={`nav ${show && "navBlack"}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Logo" className="logo" />


      <img src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png" alt="Logo" className="avatar" />
  </div>;
}

export default Navbar;
