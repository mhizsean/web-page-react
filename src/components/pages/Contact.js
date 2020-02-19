/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Contact extends Component {
    render() {
        return (
            <section className="my-5 py-5" >
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            {/* map */}
                            <iframe src="https://www.google.com/maps/d/embed?mid=1sDppGLPj-0HCUyltdTpQbn9nupMi3gKT" style={{
                                border: 0,
                                width: '100%',
                                height: '315px',
                                frameborder: '0'
                            }} allowFullScreen></iframe>
                        </div>

                        <div className="col-md-5">
                            <h4><strong>Contact Us</strong></h4>
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Enter Phone"/>
                                </div>
                                <textarea className="form-control" cols="60" rows="3" placeholder="Message"></textarea> <br/>
                                <Link className="btn btn-outline-primary text-uppercase " > <i className="fab fa-telegram-plane"></i> SEND</Link>
                            </form>
                        </div>
                </div>
                </div>
                

            </section>
        )
    }
}

export default Contact
