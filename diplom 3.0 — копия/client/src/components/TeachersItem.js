import React from 'react';
import {Card, Col, Image} from "react-bootstrap";


const TeachersItem = ({teachers}) => {

    return (
            <Col md={6} className="mt-5 ">
                <Card className="d-flex flex-row" style={{Width:510,minHeight:200,borderRadius:0,border:'1px solid #004242', background:'#004242'}}>
                    <Image className="mt-1" style={{marginLeft:'2px',border:'1px solid white'}} width={180} height={190} src={process.env.REACT_APP_API_URL + teachers.img}/>
                    <div className="d-flex flex-column mt-2 align-items-start justify-content-start" style={{marginLeft:'20px'}}>
                        <h5 style={{color:'white',fontFamily:'sans-serif'}}>Имя: {teachers.name}</h5>
                        <h5 style={{color:'white',fontFamily:'sans-serif'}}>Фамилия: {teachers.surname}</h5>
                        <h5 style={{color:'white',fontFamily:'sans-serif'}}>Телефон: +{teachers.phone}</h5>
                    </div>
                </Card>
            </Col>
    );
};

export default TeachersItem;