import React from 'react';
import './CSS/chat-box.css';
export default function Chat_box() {
    function Open_chat_box(){
        document.getElementById("chat-box").style.display='block';
        document.getElementById("icon-messenger").style.display='none';
        document.getElementById("icon-x").style.display='block';
    }
    function Close_chat_box(){
        document.getElementById("chat-box").style.display='none';
        document.getElementById("icon-messenger").style.display='block';
        document.getElementById("icon-x").style.display='none';
    }
    return(
        <div className="chat-box">
            <div className="chat-box-small" id="chat-box">
                <h4>Let's chat? - Online</h4>
                <p>Please fill out the form below to start chatting with the next available agent</p>
                <form className="input-chat-box">
                    <input type="text" placeholder="Your Name" className="form-control" required/>
                    <input type="email" placeholder="Email Address" className="form-control" required/>
                    <input type="text" placeholder="Your message to us" className="form-control input-message" required/>
                    <input type="submit" className="start-chat form-control" value="Start Chat"/>
                </form>
            </div>
                 <i onClick={Close_chat_box} className="fas fa-times" id="icon-x"/>
                <i onClick={Open_chat_box} className="fab fa-facebook-messenger" id="icon-messenger"/>

        </div>

    )
}