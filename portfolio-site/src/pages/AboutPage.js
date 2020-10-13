import React from "react";
import Hero from "../components/Hero";
import timothy from '../images/timothy_crop.jpg';
import {Container, Image, Row, Col} from "react-bootstrap";

function AboutPage(props){
    return(
        <div>
            <Container style={{ ...center, ...{ minHeight: "90vh" } }}>
                <div>
                    <Col md={12} style={center}>
                        <Image
                            src={timothy}
                            style={imageSize}
                        />
                    </Col>
                    <Col md={12} style={center}>
                        <h1 style={{
                            letterSpacing: "1px",
                            padding:"10px"
                        }}>
                            Welcome!
                            <span
                                className="hello"
                                role="img"
                                aria-label="hello"
                                style={{
                                    marginLeft: "20px",
                                }}
                            >👋
                        </span>
                        </h1>
                    </Col>
                    <Row style={{
                        letterSpacing: "1px",
                        marginBottom: "10px",
                    }}>
                        <Col style={center}>
                            <h6 style={{fontWeight:
                                "300 !important",
                            fontSize: "1.4rem",
                            lineHeight: "1.5"}}>
                                I'm <strong>Timothy Nguyen</strong> and I am a junior at UMass Amherst studying Computer Science and Statistics.
                                I'm an aspiring software engineer and initiator in technology and I am currently
                                looking for internship roles in Software Engineering for the Spring and/or Summer of 2021.
                            </h6>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

const heading = {

};

const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: '1.1 rem',
    textHeight: "1.5",
    textAlign: "center"
};

const imageSize = {
    display:"flex",
    width: "250px",
    padding: "2.0 em",
    borderRadius: 60/2
};

export default AboutPage;