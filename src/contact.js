import Header from "./heder";
import React from "react";
import './contact.css'
import axios from "axios";
export default class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={"name":"","email":"","msg":""}
    }
    change=(event)=>{
        let a=event.target.name
        let b=event.target.value
        this.setState({[a]:b})    
    }
    submit=(event)=>{
        event.preventDefault()
        if (this.state.msg ==='' || this.state.name==='' || this.state.email===''){
            return alert("sending nothing")
        }
        else{
            axios.post("https://portpolio-ku5n.onrender.com",this.state)
            .then((err)=>console.log(err))
        }
        console.log(this.state)
        const k=document.querySelectorAll(".krt")
        k.forEach(i=>{
            i.value=''
        })
        this.setState({"name":"","email":"","msg":""})
        console.log(this.state)
        return alert("thanks message to me")
    }
    render(){
        return(
            <div id="mai">
                <Header/>
                <div id="cont">

                        <div id="im"><img src="https://www.concept4u.com/wp-content/uploads/2005/12/email-icon-transparent-background.png" alt="error" /><a href="http://www.gmail.com" style={{"color":"white"}}><h5>kireetis407@gmail.com</h5></a></div>
                        {/* <div id='im'><img src='https://static-00.iconduck.com/assets.00/linkedin-with-circle-icon-2048x2048-np6yltn1.png' alt="error"/><h5>LinkedIn</h5></div> */}
                    {/* </div>
                    <div> */}
                        {/* <div id='im'><img src='https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png' alt="error"/><h5>Github</h5></div> */}
                        <div id='im'><img src='https://simpleicon.com/wp-content/uploads/phone-symbol-2.png' alt="error"/><h5>+91-6366908439</h5></div>
                    
                </div>
                <div>
                    <form action="/contact" method="post" >
                        <input className="krt" type="text" placeholder="Enter your Name" name="name" value={this.state.name} onChange={this.change}/>
                        <input className="krt" type="text" placeholder="Enter your Email" name="email" value={this.state.email}  onChange={this.change}/>
                        <textarea className="krt" placeholder="Message me" name="msg" value={this.state.msg} onChange={this.change}/>
                        <button id="st" style={{"border":"1px solid green","width":"100px","height":"50px","border-radius":"10px","background-color":"#2d4067","fontSize":"20px","color":"white"}} onClick={this.submit}>send</button>
                    </form>
                </div>
            </div>
        )
    }
}