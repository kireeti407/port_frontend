import './home.css'
import Header from './heder'
import { useEffect, useState } from 'react';
function App() {
  const ki="Full Stack Developer"
  const [k,change]=useState("")
  const [i,ing]=useState(0)
  useEffect(()=>{
    if (i>ki.length){
      ing(i*0)
      change("")
    }
    setTimeout(()=>{
      change(k+ki[i])
      ing(i+1)
      console.log(i)
    },400)
  },[i,ing,change,k])
  return (
    <div style={{"height":"100%","width":"100%"}}>
          <Header />
          
          <div className='main'>
            <div className='pht'><div id="photo">
            </div></div>
            <div id="nam">
              <h1>Hi,</h1>
              <h1>I'm <u>KIREETI</u></h1>
              <h1>I'm  <u ><color id="col">{k}</color></u>|</h1>
              <div className='social'>
             <a href='https://www.linkedin.com/in/kireeti-sangala/' style={{"padding-left":"10%"}}> <img src='https://static-00.iconduck.com/assets.00/linkedin-with-circle-icon-2048x2048-np6yltn1.png' alt="error" /></a>
             <a href='https://github.com/kireeti407'> <img src='https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png' alt="error"/></a>
              </div>
            </div>
          </div>
      </div>  
  );
}


export default App;
