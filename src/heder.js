import React from "react";
import './header.css'
import {Link} from "react-router-dom";
export default class Header extends React.Component{
    mini(){
        const c=document.getElementById("ph")
        c.style.display="inline"
        const b=document.getElementById("but")
        b.style.display="none"
    }
    hide(){
        const c=document.getElementById("ph")
        c.style.display="None"
         const b=document.getElementById("but")
        b.style.display="inline"

    }
    render(){
        return(
            <div id="header">
                <div id='krt'>
                <div id="name"><h2>Kireeti Sangala</h2></div>
                <div className='navbar'>
                    <Link to='/'><li >HOME</li></Link>
                    <Link to='/Aboutme'>< li>ABOUT ME</li></Link>
                    <Link to='/Skills'><li >SKILLS</li></Link>
                    <Link to='/Contact'>< li>CONTACT</li></Link>
  
                    {/* <Link to='/'><li><h5>Home</h5></li></Link>
                    <Link to='/Aboutme'><li><h5>About me</h5></li></Link>
                    <Link to='/Skills'><li><h5>Skills</h5></li></Link>
                    <Link to='/Contact'><li><h5>Contact</h5></li></Link> */}
              </div>
              <div id="phone"> 
                <button id="but" className="but1" onClick={this.mini}><img src="https://img.icons8.com/?size=50&id=36389&format=png" alt="error"/></button>
              <div id="ph"> 
                    <button id="but" onClick={this.hide}><img src="https://img.icons8.com/?size=50&id=23537&format=png" alt="error"/></button>
                <div >
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/Aboutme'><li>About me</li></Link>
                    <Link to='/Skills'><li>Skills</li></Link>
                    <Link to='/Contact'><li>Contact</li></Link>
                </div>
                </div>

            </div>
            </div>
            </div>
        )
    }
}