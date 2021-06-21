import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createNews} from "../../http/newsAPI";

const CreateNews = observer(({show, onHide}) => {

    const{news} = useContext(Context)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)

    const addNews =()=>{
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('img', file)
        createNews(formData).then(data => onHide())
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
                    Добавить новость
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    placeholder={"Введите заголов новости"}
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Введите описание новости"}
                    />
                    <Form.Control


                        placeholder={"Введите заголовок расширенной новости"}
                    />
                    <Form.Control

                        placeholder={"Введите описание расширенной новости"}
                    />
                    <Form.Control
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addNews}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateNews;