import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TeachersList from "../components/TeachersList";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchTeachers} from "../http/teachersAPI";


const Teachers = observer(()=>{

    const {teachers} = useContext(Context);

    useEffect(()=>{
        fetchTeachers().then(data=> teachers.setTeachers(data))
    },[])


    return (
        <Container>
            <Row>
                <Col md={12}>
                    <TeachersList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Teachers;