import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createNews} from "../../http/newsAPI";
import {createTeachers} from "../../http/teachersAPI";

const CreateTeachers = observer(({show, onHide}) => {

    const {teachers} = useContext(Context)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [surname, setSurname] = useState('')
    const [file, setFile] = useState(null)


    const addTeachers =()=>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('surname', surname)
        formData.append('phone',phone)
        formData.append('img', file)
        createTeachers(formData).then(data => onHide())
    }
    const selectFile = e =>{
        setFile(e.target.files[0])
    }
    return (
        <Modal
            show ={show}
            onHide ={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить учителя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите имя Учителя"}
                    />
                    <Form.Control
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        placeholder={"Введите фамилию учителя"}
                    />
                    <Form.Control
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder={"Введите телефон учителя"}
                    />
                    <Form.Control
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addTeachers}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateTeachers;