import React, {useContext, useEffect} from 'react';
import {Container, Row, Col} from "react-bootstrap";


import NewsList from "../components/NewsList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchNews} from "../http/newsAPI";


const Main = observer(() => {

    const {news} = useContext(Context)

    useEffect(()=>{
        fetchNews().then(data=> news.setNews(data))
    },[])

    return (
        <Container>
            <Row>
               <Col md={12}>
                    <NewsList/>
               </Col>
            </Row>
        </Container>
    );
});

export default Main;