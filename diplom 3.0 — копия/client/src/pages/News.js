import React, {useContext} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";

const News = () => {

    const {news} = useContext(Context)

    return (
        <Container className="mt-4">
            <Row className="d-flex align-items-start justify-content-center">
                <Col md={6}>
                    <Image width={550} height={400} src={news.img}/>
                </Col>
                <Col md={6} style={{wordBreak:'break-all'}}>
                    <h2 style={{color:'#004242',fontSize:'36px'}}>{news.title}</h2>
                    <p style={{color:'#004242',fontSize:'24px'}}>{news.description}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default News;