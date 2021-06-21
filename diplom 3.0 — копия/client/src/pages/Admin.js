import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateNews from "../components/modals/createNews";
import CreateTeachers from "../components/modals/createTeachers";


const Admin = () => {
    const [newsVisible, setNewsVisible] = useState(false)
    const [teachersVisible, setTeachersVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-success"} onClick = {() => setNewsVisible(true)} className="mt-4 p-2">Добавить новость</Button>
            <Button variant={"outline-success"} onClick = {() => setTeachersVisible(true)} className="mt-4 p-2">Добавить учителя</Button>
            <CreateNews show={newsVisible} onHide = {() => setNewsVisible(false)}/>
            <CreateTeachers show={teachersVisible} onHide = {() => setTeachersVisible(false)}/>
        </Container>
    );
};

export default Admin;