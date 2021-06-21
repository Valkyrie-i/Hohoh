import React from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {NEWS_ROUTE} from "../utils/consts";

const NewsItem = ({news}) => {
    const history = useHistory();
    return (
        <Col md={4} className="mt-5" >
            <Card className="d-flex flex-column align-items-center justify-content-start" style={{Width:300,minHeight:400,borderRadius:0,border:'1px solid #004242',background:'#004242'}}  >
                <Image width={348} height={150} src={process.env.REACT_APP_API_URL + news.img}/>
                <div className="d-flex flex-column align-items-center" style={{color:'white',wordBreak:'break-all',margin:'0 15px 0 15px'}}>
                    <h5>{news.title}</h5>
                    <p>{news.description}</p>
                </div>
                <Button className="mb-2" style={{width:200}} onClick={()=> history.push(NEWS_ROUTE + '/' + news.id)} variant={"outline-light"}>Read</Button>
            </Card>
        </Col>
    );
};

export default NewsItem;