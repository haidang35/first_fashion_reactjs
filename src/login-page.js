import React from 'react';
import './CSS/login-page.css';

export default function Login(){
    return(
        <div className="login-box">
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">
                        <form className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input type="text" className="input" required/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" required/>
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" defaultChecked />
                                <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" defaultValue="Sign In" />
                            </div>
                            <div className="hr" />
                            <div className="foot-lnk">
                                <a>Forgot Password?</a>
                            </div>
                        </form>
                        <form className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" required/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input type="password" className="input" data-type="password" required/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Repeat Password</label>
                                <input type="password" className="input" data-type="password" required/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Email Address</label>
                                <input type="text" className="input" required/>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" defaultValue="Sign Up" />
                            </div>
                            <div className="hr" />
                            <div className="foot-lnk">
                                <label htmlFor="tab-1">Already Member?</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
