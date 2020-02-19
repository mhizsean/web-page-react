import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import styled from 'styled-components';
import Review from '../Review';

class Details extends Component {
    render() {        
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText, 
                        img,
                        title,
                        maps,
                        description
                    } = data.detailInfo;

                    return (
                        <React.Fragment>
                            <HeaderDetails className="conteiner-fluid align-items-center">
                                <h1 className="display-1 font-weight-bold text-center">{headerTitle}</h1>
                                <div className="row justify-content-center" >
                                    <img src={img} alt="" style={{width: '', height: '60vh'}}/>
                                </div>
                                <h4 className="display-5">{headerSubTitle}</h4>
                                <p>{headerText}</p>

                                {/* Social */}
                                <div className="container mt-5">
                                    <div className="row justify-content-center">
                                        <div className="col-2">
                                            <i className="fab fa-facebook"/>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-instagram"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-pinterest"></i>
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-twitter"></i>
                                        </div>
                                    </div>
                                </div>
                            </HeaderDetails>

                            <div className="container" style={{backgroundColor: 'black'}}>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a href="#about" className="nav-link active" role="tab" data-toggle="tab">About Piece</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Comments</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#map" className="nav-link" role="tab" data-toggle="tab">Location</a>
                                    </li>
                                </ul>

                                <div className="tab-content mb-5" style={{color: 'white'}}>
                                    {/* About Piece */}
                                    <div id="about" className="tab-pane in active text-center mt-5" role="tabpanel">
                                        <h2 className="mb-3">{title}</h2>
                                        <p style={{padding: 20}}>{description}</p>
                                        {/* <img src={img} alt={title} className="img-thumbnail img-fluid"/> */}
                                    </div>
                                    {/* Comments */}
                                    <div className="tab-pane" id="reviews" role="tabpanel">
                                        <Review/>
                                    </div>
                                    {/* location */}
                                    <div className="tab-pane" id="map" role="tabpanel">
                                        <h3>Where to find us</h3>
                                        <iframe src={maps} frameBorder="0" title="map"
                                        style={{
                                            border: 0, 
                                            height: '18.125rem',
                                            width: '100%'}}></iframe>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }}
            </InfoConsumer>
        );
    }
}

export default Details;


const HeaderDetails = styled.header`
    h4 {
        padding-left: 5%;
        padding-right: 10%;
        margin-bottom: 5%;
    }
    p {
        padding-left: 5%;
        padding-right: 10%;
        margin-bottom: 10%;
    }

    .fab {
        transition: all 0.3s;
    }
    
    .fab:hover { 
        color: pink;
    }
     @media(max-width: 760px) {
         h1 {
             font-size: 40px;
         }
         .row {
            margin-left: 30;
         }
     }
`;