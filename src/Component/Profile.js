import React from "react";
import { Card, Button } from "react-bootstrap";


const Profile = ({data,children, handleClick}) => {
  return (
    <div className="container">
      {data.map((el,index)=><Card style={{ width: "18rem" }} key={index}>
        <Card.Img variant="top" src= {children} />
        <Card.Body>
          <Card.Title> {el.fullname} </Card.Title>
          <Card.Text>
            <h2> I work as a {el.profession}</h2>
            {el.bio}
          </Card.Text>
          <Button variant="primary" onClick = {()=> handleClick(el.fullname)}> Alertname </Button>
        </Card.Body>
      </Card>)}
      
    </div>
  );
};

export default Profile;
