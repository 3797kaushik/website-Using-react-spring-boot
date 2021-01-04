import React, { Fragment , useEffect, useState} from "react";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from "reactstrap";
import { Form, FormGroup } from "reactstrap";
import axios from 'axios'
import base_url from "../service/bootapi";
import { toast } from 'react-toastify';

const AddCourse = ()=>{ 
    const divStyle = {marginLeft: '10px'}

    useEffect(()=>{
        document.title = 'All Course'
    }, []);
    const [course, setCourse] = useState({});

    // Form handler function
    const handleForm=(e)=>{
        console.log(course);

        e.preventDefault();
        postDataToServer(course);
    } 

    // creating the function to post data on the server
    const postDataToServer = (data)=>{
        axios.post(`${base_url}/courses` ,data).then(
            (response) =>{
                // success
                console.log(response);
                toast.success('Course has been added');
                
            },(error) =>{
                console.log(error);
                
                toast.error('Something went wrong', {position :'bottom-center'})
            }
        );
    };

    return (
        <Fragment>
            <h1 className="text-center">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId" >Course Id</label>
                    <input type="text" style={divStyle} placeHolder="Enter Here" name="userId" id="userId" 
                        onChange={(e)=>{
                            setCourse({ ...course , id:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course title</label>
                    <input type="text" style={ divStyle } placeHolder="Enter Here" name="title" id="title"
                        onChange={(e)=>{
                            setCourse({ ...course , title:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <input type="textArea" style={divStyle} placeHolder="Enter Here" id="description"
                        onChange={(e)=>{
                            setCourse({ ...course , description:e.target.value});
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type='submit' color="success">Add Course</Button>
                    <Button color="warning" style={divStyle} onClick={()=>{
                        setCourse({});
                    }}>clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;