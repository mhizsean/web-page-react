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
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam alias eius eum odio ipsam!</p>
                            </ul>
                        </div>
                        {/* /Col 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem, ipsum.</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">lorem ipsum</a></li>
                                <li><a href="/">lorem ipsum</a></li>
                                <li><a href="/">lorem ipsum</a></li>
                                <li><a href="/">lorem ipsum</a></li>
                                
                            </ul>
                        </div>
                        {/* /Col 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem, ipsum.</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">lorem ipsum</a></li>
                                <li><a href="/">lorem ipsum</a></li>
                                <li><a href="/">lorem ipsum</a></li>
                                <li><a href="/">lorem ipsum</a></li>
                            </ul>
                        </div>
                        {/* /Col 4*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem, ipsum.</h4>
                            <ul className="list-unstyled">
                                <li>Subscribe to recieve our newsletter</li>
                                <input type="email" placeholder="Subscribe..."/> <br/>
                                <button className="btn">Subscribe</button>
                            </ul>
                        </div>
                    </div>
                    
                        {/* Footer bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy; {new Date().getFullYear()} Lot To See. All Rights Reserved.
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
        background: var(--mainDark);
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
        color: var(--mainGrey);
        text-decoration: none;
    }
    ul li a:hover {
        color: var(--mainDark);
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

`;