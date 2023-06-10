import {Table, TableHead, TableRow, TableCell,TableBody, Button,styled} from '@mui/material'

import {useEffect, useState} from "react";
import {getUsers, deleteInfo} from '../service/Api';

import {Link} from 'react-router-dom'


const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
`
const Thead = styled(TableRow)`
background:black;
& > th{
    color:white;
    font-size: 20px;
}
`
const Tbody = styled(TableRow)`
    & > td{
        font-size: 18px;
    }
`
const AllUser = () =>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getAllUser();
    },[])
    const getAllUser = async() => {
        let alldata = await getUsers();
        setUsers(alldata.data);
    }
    const deleteData = async (id) => {
        await deleteInfo(id);
        getAllUser();
    }
    return (
        <>
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phonenumber</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        
                      <Tbody key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phonenumber}</TableCell>
                        <TableCell>
                            <Button variant='contained' style={{margin:'0px 5px'}} component= {Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button variant='contained' style={{backgroundColor:'red'}} onClick={()=>deleteData(user.id)}>Delete</Button>
                        </TableCell>
                     </Tbody>
                      
                    ))
                    
                   
                }
            </TableBody>
        </StyledTable>
        
        </>
    )
}
export default AllUser;