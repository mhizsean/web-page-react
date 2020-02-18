import React, { Component } from 'react'
import { InfoConsumer } from '../context';
import Info from '../Info';


export class Home extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    {/* <h2>A stylish Experience You never knew</h2> */}
                </div>
                <img src="../images/big3.jpg" alt="" className="home-img" placeholder="An Adventure of styles"/>
                <div className="container justify-content-center">
                <h2 className="sneak-peak">Sneak Peak</h2>
                    <div className="row mt-5 ">
                        <InfoConsumer>
                            {value => {
                                return value.info.map(item => {
                                    return <Info key={item.id} item={item} />
                                })
                            }}
                        </InfoConsumer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
