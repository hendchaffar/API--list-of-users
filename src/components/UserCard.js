import React from 'react'
import {Card} from 'react-bootstrap' 

const UserCard = ({el})=> {
    return (
        <div>
            <Card
    text= 'dangerhi'
    style={{ width: '18rem' }}
    className="Info"
    bg='info'
    text='white'
    style={{ width: '350px' }}

  >
    <Card.Header>{el.username}</Card.Header>
    <Card.Body>
      <Card.Title> {el.name} </Card.Title>
      <Card.Text> {el.email} </Card.Text>
      <Card.Text> {el.address.street} ,  {el.address.city}</Card.Text>

    </Card.Body>
  </Card>
        </div>
    )
}

export default UserCard