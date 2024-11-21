import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_y2qhacm', 'template_lncyzma', form.current, {
                publicKey: '0OClNmWCMF33r5SNa',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    console.log('Not working...')
                },
            );
    };

    return (
        <>
            <div id="contact" className="contact-style-one-area default-padding bg-gray">
                <div className="container">
                    <div className="contact-style-one-items">
                        <h1 className="fixed-text">Contact Me</h1>
                        <div className="row">
                            <div className="col-lg-6">
                                <form ref={form} onSubmit={sendEmail}  className="contact-form contact-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group comments">
                                                <textarea className="form-control" id="comments" name="message" placeholder="Tell Us About Project *" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button className="btn-style-regular" type="submit" name="submit" id="submit">
                                                <span>Get in Touch</span> <i className="fas fa-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Alert Message */}
                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="contact-illustration">
                            <img src="assets/img/illustration/5.png" alt="Image Not Found" />
                            <img src="assets/img/shape/13.png" alt="Image Not Found" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
