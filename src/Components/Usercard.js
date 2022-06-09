import React from 'react'
import{Card,ListGroupItem,ListGroup} from 'react-bootstrap'
import Avatar from 'react-avatar'
import{ FaAddressCard,FaDollarSign,FaCalendar} from 'react-icons/fa'
function Usercard({item}) {
  return (
      
    <>
   
    <Card style={{backgroundColor:"#bcabbf"}} className = "my-3 p-3 rounded cards">
  <Card.Body>
    <Card.Title>
        <Avatar name={item.first+ " " +item.last} 
        size={75} textSizeRatio={1.25} 
        round={true}/>
       

    </Card.Title>
    
  </Card.Body>
  <ListGroup  className="list-group-flush">
  <ListGroupItem ><FaAddressCard/> {item.address}</ListGroupItem>

    <ListGroupItem><FaCalendar/>Created:{item.created}</ListGroupItem>
    <ListGroupItem><FaDollarSign/>Balance:{item.balance}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#" style={{textDecoration:'none'}}>{item.email}</Card.Link>
  </Card.Body>
</Card>
    </>
  )
}

export default Usercard