import axios from 'axios';

const URL = 'http://localhost:8000';
const addUser = async(data) =>{
    try{
      return  await axios.post(`${URL}/addUser`, data)
    }catch(error){
        console.log("Error", error)
    }
}

const getUsers = async () => {
  try{
    return await axios.get(`${URL}/allUser`)
  }catch(error){
    console.log("Error while calling getUsers", error)
  }}

const getUser = async (id) => {
  try{
    return await axios.get(`${URL}/${id}`)
  }catch(error){
    console.log("Error while calling getUser", error)
  }}

  const updateUser = async (user,id) => {
    try{
      return await axios.put(`${URL}/${id}`,user)
    }catch(error){
      console.log("Error while calling EditUser", error)
    }}
  
const deleteInfo = async (id) =>{
  try{
    await axios.delete(`${URL}/${id}`);
  }catch(error){
    console.log("Error when deleting data", error)
  }
}
export {addUser, getUsers,getUser,updateUser,deleteInfo};
