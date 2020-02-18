import React, { Component } from 'react';
import { Image, Container, Col, Row} from 'react-bootstrap'

export class About extends Component {
    render() {
        return (
            <div>
                <h2>About Us</h2>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                        <Image src="../avatars/avatar-1.png" style={{height: "15rem"}} roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                        <Image src="../avatars/avatar-2.png" style={{height: "15rem"}} roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                        <Image src="../avatars/avatar-1.png" style={{height: "15rem"}} roundedCircle />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About
