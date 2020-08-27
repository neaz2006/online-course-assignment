import React from 'react';
import { Button,Card } from 'react-bootstrap';


const Cart = (props) => {
    const cart =props.cart;
     const total = cart.reduce( ( total, prd ) =>total + prd.price,0);
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const element = cart[i];
    //      total = total + element.price;
        
    // }
    return (

        <div className="text-center">            
            <Card style={{ width: '18rem' }}>  
                <Card.Body>
                    <Card.Title>Order Summery</Card.Title>
                    <Card.Text>Course Add: {cart.length}</Card.Text>
                    <Card.Text>Total Price: {total} Taka</Card.Text>
                    <Button variant="primary">Make your Payment</Button>
                </Card.Body>
            </Card>   
            
        </div>
        
        
        
    );
};

export default Cart;