import React from "react";
import Header from './heder'
import './skills.css'

export default class Skills extends React.Component{
    render(){
        return(
            <div style={{"width":"100%","height":"100%"}}>
                <Header />
                <div id="container">
                    <div id="con1">
                        <div id="imge1">
                            <div id="im1"><h3><u>Technical skills</u></h3></div>
                            <ul>
                                <li>Python</li>
                                <li>Html,CSS and JavaScript</li>
                                <li>MERN Stack</li>
                                <li>Java</li>
                                <li>Data structures and Algorithm</li>
                            </ul>

                        </div>
                        <div>
                            <h3><u>Soft Skills</u></h3>
                            <ul>
                                <li>Problem Solving</li>
                                <li>Communication</li>
                                <li>Observation</li>
                                <li>Decision Making</li>
                            </ul>
                        </div>
                    </div>
                    <div id="con2">
                        <div>
                            <h3><u>Certificates</u></h3>
                            <ul>
                                <li><a href="https://drive.google.com/file/d/1FYDYqjwMZYIWRivHkJ6wqLr0VVPMaDcv/view?usp=drive_link">Web Development and DSA</a></li>
                                <li><a href="https://drive.google.com/file/d/1Wcyl4XRREt_0T1cD8-aoK3pBjKDZc00i/view?usp=drive_link">Ms-Office</a></li>
                                <li><a href="https://drive.google.com/file/d/1QOgLEBYbm-rYU-ycT14_53KMKpL9iSnh/view">Java Programing</a></li> 
                                <li><a href="https://drive.google.com/file/d/1T2leMa5RUWCnBUzd_UMHTI_GPiNc4nDF/view?usp=drive_link">Problem Solving</a></li>
                                <li><a href="https://drive.google.com/file/d/1TPmF9P614Cgln77oFLEk4l1KXeeDTv6t/view?usp=sharing">Python</a></li>
                            </ul>                      
                        </div>
                        <div>
                            <h3><u>Projects</u></h3>
                            <ul>
                            <li><a href="https://lv-soqv.onrender.com/">Love Check</a><a href="https://github.com/kireeti407/Check-LV"><img src='https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png' alt="error"/></a></li>
                                <li><a href="https://relaxed-macaron-a5be1c.netlify.app/">Fake Shop Explorer </a><a href="https://github.com/kireeti407/project/commit/f82fc0eca31288f3dbb4fc954360350b99e81ce6"><img src='https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png' alt="error"/></a></li>
                                <li><a href="https://joyful-vacherin-70df7a.netlify.app/">Rock,paper,Scissors Game </a><a href="https://github.com/kireeti407/project/commit/401404568a1deb69ac698673e25540958e230cde"><img src='https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png' alt="error" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}