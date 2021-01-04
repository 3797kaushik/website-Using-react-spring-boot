import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from "reactstrap";

import axios from 'axios'
import base_url from "../service/bootapi";
import { toast } from 'react-toastify';

const Course = ({course , update})=>{
    const divStyle = {marginLeft: '10px'}
    const deleteCourse =(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) =>{
                // success
                console.log(response);
                toast.success('Course has been deleted');
                update(id);
            },(error) =>{
                console.log(error);
                
                toast.error('Something went wrong', {position :'bottom-center'})
            }
        );
    }
    return (
        <div>
        
          <Card className="text-center">
            <CardBody>
            <CardTitle tag="h5">{course.title}</CardTitle>
            <CardText>{course.description}</CardText>
            
                <Container style={{width:'200px'}}>
                    <Button style={divStyle}  color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button style={divStyle} color="warning">Update</Button>
                </Container>
            </CardBody>
            
          </Card>
          <hr/>
        </div>
    );
}

export default Course;