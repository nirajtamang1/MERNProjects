
const User = require("../schema/userschema")
const addUser = async (req, res)=>{
    const user = req.body;
    const newUser = new User(user);
    try {
       await newUser.save();
       res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

const getUsers = async (req, res) =>{
    try{
       const users =  await User.find()
       res.status(201).json(users);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

const getUser = async (req, res) =>{

    try{
       const user =  await User.find({id:req.params.id})
    //    if you want to take data from mongodb
    // const user = await User.findById(req.params.id)
       res.status(201).json(user);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

const updateUser = async (req, res) => {
    let user = req.body;
    const editUser = new User(user);

    try {
        // await console.log("Successfully updateded");
        await User.updateOne({id:req.params.id},editUser)
        res.status(201).json(editUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
const deleteUser = async (req, res) => {
 

    try {
        // await console.log("Successfully updateded");
        await User.deleteOne({id:req.params.id})
        res.status(201).json(User)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}




module.exports = {addUser, getUsers, getUser,updateUser,deleteUser}