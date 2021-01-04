import React, { useEffect, useState } from 'react';
import Course from './Course';
import axios from 'axios'
import base_url from "../service/bootapi";
import { toast } from 'react-toastify';

const AllCourses = ()=>{
    // similar to componentdidmount and componentdidupdate
    // Passing empty array in second param will avoid componentdidupdate
    useEffect(()=>{
        document.title = 'All Course'
    }, []);
    const [courses , setCourses] = useState([
        { id:'1' ,title : 'J course ' , description :'desc'},
        {id:'13' ,title : 'R course ' , description :'desc'},
        {id:'12' ,title : 'P course ' , description :'desc'}
    ])
    
    // function to call service
    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/courses`).then(
            (response) =>{
                // success
                console.log(response);
                toast.success('Course has been loaded');
                setCourses(response.data , {position :'bottom-center'});
            },(error) =>{
                console.log(error);
                toast.error('Something went wrong', {position :'bottom-center'})
            }
        );
    }
    // clling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    } , []);
    const updateCourses =(id)=>{
        setCourses(courses.filter((c)=> c.id != id));
    }
    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>

            {
                courses.length >0 ? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses} />) : " No Course"
            }
        </div>
    )
}

export default AllCourses