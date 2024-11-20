import React from 'react';
import Header from './heder';
import './About.css'
export default class About extends React.Component{
    render(){
        return(
            <div id="About">
                <Header />
                <h1 id="k">About Me</h1>
                <div id='skill'>
                    <div id="ho"> 

I am a B.Tech Computer Science and Engineering student passionate about web development, problem-solving, and building innovative solutions. With a strong foundation in modern technologies, I have completed a comprehensive Web Development program at Prepleaf by Masai, where I gained practical experience in creating dynamic and responsive web applications.  

<br/><br/>In addition to my expertise in web development, I have honed my problem-solving skills by dedicating over 750 hours to mastering Data Structures and Algorithms (DSA) using Python. My journey reflects my commitment to continuous learning and leveraging technology to create impactful solutions.  

<br/><br/>As a driven and detail-oriented individual, I enjoy working on challenging projects that allow me to expand my skill set. Whether it's building efficient applications, contributing to team success, or exploring innovative ideas, I am dedicated to achieving excellence in everything I do.  

<br/><br/>Feel free to connect with me as I explore opportunities to grow and contribute in the field of technology!
                    </div>
                
                </div>
                <h1 id="k">Education</h1>
                <div id="education">
        
                    <div id="ho">
                        <h2><u>B.tech (pursuing)</u></h2>
                        <ul >
                            <li>computer science and Engineering</li>
                            <li>Sri Krishnadevaraya university</li>
                            <li>2021-2025</li>
                        </ul>
                        <h2><u>Web development and DSA</u></h2>
                        <ul>
                            <li>Masai School</li>
                            <li>jan-2023 to july-2023</li>
                        </ul>
                        
                    </div>
                </div>
                
            </div>
            
            
        )
    }

}