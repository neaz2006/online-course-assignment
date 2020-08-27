import React from 'react';
import './CourseDetails.css'
import { Button } from 'react-bootstrap';

const CourseDetails = (props) => {
    console.log(props);
    const { name ,mantor,address,images,phone,price}= props.course;
   
    
    return (
        <div className="maint-div">
            <div className="course-img">
                <img src={images} alt=""/>
            </div>
            <div className="details">
                <h2>{name}</h2>
                <p><b>Mantor Name:-</b> {mantor}</p>
                <p><b>City:- </b>{address}</p>
                <p><b>Phone Number:- </b> {phone}</p>
                <p><b>Course price:-</b> {price} Taka</p>            
                <button onClick={()=>props.handelAddCourse(props.course)} className="btn btn-warning ">Enrol Now</button>
                
            </div>                      
        </div>
    );
};

export default CourseDetails;