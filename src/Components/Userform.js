import React,{useState} from 'react'
import{Form,Button,Container} from 'react-bootstrap'
import Axios from 'axios'
import{Link} from 'react-router-dom'
import{ FaUser} from 'react-icons/fa'



function Userform({item}) {
    const url="https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    const[addUser,setaddUser] = useState({
       
        email:"",
        password:"",
        first:"",
        last:"",
        address:"",
        created:"",
        balance:""
    }) 

    function submit(e) {
        e.preventDefault();
        Axios.post(url,{

        email:addUser.email,
        password:addUser.password,
        first:addUser.first,
        last:addUser.last,
        address:addUser.address,
        created:addUser.created,
        balance:addUser.balance

        })
        .then(res=>{
            console.log(res.addUser);
        })
    }
    function inputHandle(e){
        const newaddUser={...addUser}
        newaddUser[e.target.id]=e.target.value
        setaddUser(newaddUser)
        console.log(newaddUser);
        

    }

    
  return (

    <div>
     <Link className='btn btn-outline-dark rounded my-2 btn-sm' to='/'>Back</Link>

        
    <br/>
    <br/>
    <br/>
    <h1 className='text-center'>
        < FaUser/>
  <p> <strong>NEW USER</strong></p> 
  </h1>
  <Container style={{width:"50%", height:"50%",backgroundColor:"#bcabbf"}}>
       <Form onSubmit={(e) => submit(e)} className='my-3 p-6 rounded cards '>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control onChange={(e) =>inputHandle(e)} id="email" value={addUser.email} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={(e) =>inputHandle(e)} id="password" value={addUser.password} type="password" placeholder="Password" />
    <Form.Text className="text-muted">
      We'll never share yourpassword with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control  onChange={(e) =>inputHandle(e)} id="first" value={addUser.first} type="text" placeholder="First Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control onChange={(e) =>inputHandle(e)} id="last" value={addUser.last} type="last" placeholder="Last Name" />
    </Form.Group>


<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Address</Form.Label>
    <Form.Control  onChange={(e) =>inputHandle(e)} id="address" value={addUser.address}type="text" placeholder="Enter Address" />
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Created Date</Form.Label>
    <Form.Control  onChange={(e) =>inputHandle(e)} id="created" value={addUser.created} type="date" placeholder="created date" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Balance</Form.Label>
    <Form.Control onChange={(e) =>inputHandle(e)} id="balance" value={addUser.balance} type="number" placeholder="Balance" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button className='text-center' variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
    </div>
  )
}

export default Userform