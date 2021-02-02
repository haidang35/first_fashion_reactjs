import React from 'react';
import  './CSS/Contact.css';
export default function Contact(){
    return(
        <section className="section-main">
            <div>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.879997675493!2d105.78599587923259!3d21.051884000717607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2c375e9b8d%3A0xbd8b092f435d8cec!2zQ-G7lSBOaHXhur8gMSwgQ-G7lSBOaHXhur8sIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1611817884079!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            <div className="container">
                <div className="information-page">
                    <div className="row">
                        <div className="col-md-6 block-left">
                            <h4 className="title-information">INFORMATION</h4>
                            <div className="contact-us">
                                <h1>Contact Us</h1>
                                <p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
                                <p>Email: nguyenhaidangyq@gmail.com</p>
                            </div>
                            <div className="information-of-america">
                                <h3>VietNam</h3>
                                <p>105 Tran Quoc Vuong, Dich Vong Hau, Cau Giay, Ha Noi, Viet Nam</p>
                                <p>117/15 Tran Cung, Co Nhue 1, Bac Tu Liem, Ha Noi, Viet Nam</p>
                            </div>
                            <div className="information-of-america">
                                <h3>France</h3>
                                <p>109 Avenue Léon, 63 Clermont-Ferrand<br />
                                    +12 345-423-9893</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form" >
                                <div className="row">
                                    <form action="">
                                            <div className="col-md-6">
                                                <input className="input-information form-control" type="text" name="name" placeholder="Name" id="name" required title="Please enter your name here"/>
                                            </div>
                                            <div className="col-md-6 ">
                                                <input className="input-information form-control" type="email" name="email" placeholder="Email" id="email" required/>
                                        </div>
                                        <div className="input-bar">
                                            <textarea className="form-control box-message " placeholder="Message" defaultValue={""} required/>
                                            <input type="submit" className="button-send" value="Send Message"/>
                                        </div>
                                    </form>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}