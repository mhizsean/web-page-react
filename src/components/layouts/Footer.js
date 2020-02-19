import React from 'react';
import styled from 'styled-components';

 function Footer() {
    return (    
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* /Col 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Stylishly You</h4>
                            <ul className="list-unstyled">
                                <p>A place for styles beyond imaginations. Stay on here for upadates on events and top designers</p>
                                <p className="isocial"><i className="fab fa-facebook"></i><i className="fab fa-twitter"></i><i className="fab fa-pinterest"></i><i className="fab fa-instagram"></i></p>
                            </ul>
                        </div>
                        {/* /Col 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Teams</a></li>
                                <li><a href="/">Support</a></li>
                                <li><a href="/">Showcase</a></li>
                                <li><a href="/">Follow up</a></li>
                                
                            </ul>
                        </div>
                        {/* /Col 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem, ipsum.</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Suggetions</a></li>
                                <li><a href="/">Feedback</a></li>
                                <li><a href="/">Privacy</a></li>
                                <li><a href="/">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        {/* /Col 4*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Newsletter</h4>
                            <ul className="list-unstyled">
                                <li>Subscribe</li>
                                <input type="email" placeholder="Subscribe..."/> <br/>
                                <button className="btn">Subscribe</button>
                            </ul>
                        </div>
                    </div>
                    
                        {/* Footer bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy; {new Date().getFullYear()} Stylishly. All Rights Reserved.
                        </p>
                    </div>
                </div>  
            </div>
        </FooterContainer>        
    )
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainBlack);
        padding-top: 3rem;
        padding-bottom: 2rem;
        color: var(--mainBlack);

    }

    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    .container {
        background-color: var(--mainLightGrey);
        border-radius: 12px;
        padding-top: 2rem;
    }

    ul li a {
        color: var(--mainDark);
        text-decoration: none;
    }
    ul li a:hover {
        color: var(--mainGrey);
        width: 2rem;
    }

    .list-unstyled input {
        border-radius: 15px;
        outline: none;
        padding: 7px;
        font-size: 15px;
    }

    .btn {
        background-color: var(--mainDark);
        color: var(--mainWhite);
        margin: 5px;
        border-radius: 10px;
        width: 180px;
    }

    .list-unstyled .isocial .fab{
        margin: 10px;
    }

    .list-unstyled .isocial .fab:hover {
        color: var(--mainGrey);
    }

`;