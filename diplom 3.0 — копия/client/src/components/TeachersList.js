import React, {useContext} from 'react';
import TeachersItem from "./TeachersItem";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const TeachersList = observer(() => {

    const {teachers} = useContext(Context)

    return (
        <Row className="d-flex">
            {teachers.teachers.map(teachers =>
                <TeachersItem key={teachers.id} teachers={teachers}/>
            )}
        </Row>
    );
})

export default TeachersList;