import React from 'react'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    <p>Hi</p>
                </Row>
            </Container>
        );
    }
}

export default Carousel;