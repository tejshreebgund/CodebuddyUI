import React from 'react'
import './HomePage.css'
import {Slide} from './Slide.jsx';
import DropMenu from './DropMenu.jsx';
function HomePage() {
  return (
    <div className="container">
         <nav className="navbar">
            <img  style={{width:'12%'}}src="https://logos-world.net/wp-content/uploads/2021/02/Microsoft-Bing-Logo-2020-present.png" alt="img"/>
            <p>school</p>
            <p>images</p>
            <p>videos</p>
            <p>Translate</p>
            <p>...</p>
       </nav> 
       <div className='drop'><DropMenu/></div>
       <br/>
       <br/>
    
       <div className='search'>
           <input className='input'value="" type="text" name="" id=""/> 
           <img  src="https://thumbs.dreamstime.com/b/mike-mike-icon-146784248.jpg" alt="mike"/>
           <img src="https://r.bing.com/rp/s2tlPUrMzBwZzzDmnv24-pPhALs.svg" alt="sym"></img>
           <img src="https://i.pinimg.com/736x/80/37/08/803708a2135c22ec40826c306b00e933.jpg" alt="search"></img>
           </div>
                 <div className="box" style={{marginTop:'10%'}}><Slide/></div>
    </div>
  )
}

export default HomePage;