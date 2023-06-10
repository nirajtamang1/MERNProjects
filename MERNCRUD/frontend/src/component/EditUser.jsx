import { useEffect, useState } from 'react';
import { FormGroup, FormControl, InputLabel,Input,Typography,styled,Button} from '@mui/material';

import {updateUser,getUser} from '../service/Api';
import {useNavigate,useParams} from 'react-router-dom';

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


const EditUser = () =>{
    const [user, userData] = useState({

        name: "Hello",
        username: "",
        email: "",
        phonenumber: ""
      
    });

    const {name, username, email, phonenumber} = user;
    const navigate = useNavigate();

    useEffect(  ()=>{
        loadUserDetail();
    },[]);
    const {id} = useParams();

    const loadUserDetail = async () =>{
        const response = await getUser(id);
        userData(response.data[0]);
    }


    const data = (e) =>{
        userData({...user,
             [e.target.name]: e.target.value});
        
       
    }
    const editUserDetail = async ()=>{
        await updateUser(user,id);
        navigate('/allUser') 
    }
    
    return (
        <>
        
        <Contianer>
            <Header5 variant= "h5">Edit User</Header5>
            <FormControl>
                <InputLabel>Name:</InputLabel>
                <Input name="name" onChange={data} value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName:</InputLabel>
                <Input name="username" onChange={data} value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email:</InputLabel>
                <Input name="email" onChange={data} value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phonenumber:</InputLabel>
                <Input name="phonenumber" onChange={data} value={phonenumber}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>editUserDetail()}>Edit User</Button>
            </FormControl>
            
        </Contianer>
        </>
    )
}
export default EditUser;

