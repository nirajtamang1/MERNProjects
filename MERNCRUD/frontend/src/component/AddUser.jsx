import { useState } from 'react';
import { FormGroup, FormControl, InputLabel,Input,Typography,styled,Button} from '@mui/material';

import {addUser} from '../service/Api';
import {useNavigate} from 'react-router-dom';

const Contianer = styled(FormGroup)`
width:50%;
margin: 5px auto 0 auto;
& > div{
    margin-top: 20px;
}
`
const Header5 = styled(Typography)`
margin-top: 20px;

`



const AddUser = () =>{
    const [user, userData] = useState({
        name: "",
        username: "",
        email: "",
        phonenumber: ""
    });
    const navigate = useNavigate();

    const data = (e) =>{
        userData({...user,
             [e.target.name]: e.target.value});
        
       
    }
    const addUserDetail = async ()=>{
        await addUser(user);
        navigate('/allUser') 
    }
    return (
        <>
        <Contianer>
            <Header5 variant= "h5">Add User</Header5>
            <FormControl>
                <InputLabel>Name:</InputLabel>
                <Input name="name" onChange={data}/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName:</InputLabel>
                <Input name="username" onChange={data}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email:</InputLabel>
                <Input name="email" onChange={data}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phonenumber:</InputLabel>
                <Input name="phonenumber" onChange={data}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>addUserDetail()}>Add User</Button>
            </FormControl>
            
        </Contianer>
        </>
    )
}
export default AddUser;