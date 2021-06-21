import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBare = observer(() => {
    const {teachers} = useContext(Context);
    return (
        <ListGroup>
            {teachers.teachers.map(type =>
            <ListGroup.Item key={type.id}>
                {type.name}
            </ListGroup.Item>

            )}
        </ListGroup>
    );
})

export default TypeBare;