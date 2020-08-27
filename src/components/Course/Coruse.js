import React, { memo, useState } from 'react';
import FakeData from '../../FakeData/FakeData';
import CourseDetails from '../CourseDetails/CourseDetails';
import './Coruse.css';
import Cart from '../Cart/Cart';

const Coruse = () => {
    const[courses , setUsers] = useState(FakeData);
    const[cart , setCart] = useState([]);
    const handelAddCourse = (course)=>{
        const newCart = [...cart,course];
        setCart(newCart);
        
    }
    
    return (
        <div className="main-div">
            <div>
                {
                 courses.map(course => <CourseDetails
                    handelAddCourse = {handelAddCourse}
                     course={course}
                     ></CourseDetails>)
               }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>

            </div>
            
            
        </div>
    );
};

export default Coruse;