import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModels from "../models/userModels.js";
import JWT from 'jsonwebtoken';
const registerController = async (req, res) =>{
   try{
    const {name, email, phone, address, password, answer} = req.body;

    //Validations
    if(!name){
        return res.send({message:'Name is Requires'});
    }
    if(!email){
        return res.send({message:'email is Requires'});
    }
    if(!password){
        return res.send({message:'Name is Requires'});
    }
    if(!phone){
        return res.send({message:'phone is Requires'});
    }
    if(!address){
        return res.send({message:'address is Requires'});
    }
    if(!answer){
        return res.send({message:'Answer is Requires'});
    }
    // existing user
    const existingUser = await userModels.findOne({email})
    // existing user 
    if(existingUser){
        return res.status(200).send({
            success:true,
            message: 'Already register please login',
        })
    }
   
    const hashedPassword = await hashPassword(password)
   //save
   const user = await new userModels({name, email, phone, address,password:hashedPassword, answer}).save();
   res.status(201).send(
    {
    success: true,
    message: 'User register Successfully',
    user
   }
)
}catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:'Error in Registration',
        error
    })
   }
};

//LOGIN
const loginController = async (req, res) => {
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message: "Invalid email or password"
            })
        }
        //check user
        const user = await userModels.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            })
        }
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }
        const token = await JWT.sign({_id:user._id},process.env.JWT_SERCECT, {expiresIn:'7d'});
        res.status(200).send({
            success:true,
            message:'Login Successfully',
            user:{
                name:user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token
        })
    }catch(error){
        res.status(500).send({
            success:false,
            message: 'Email in login',
            error
        })
    }

}

// forgetPasswordController
const forgetPasswordController = async(req, res) =>{
    try{
        const {email, answer, newPassword} = req.body;
        if(!email){
            res.status(400).send({message:"Email is requires"})
        }
        if(!answer){
            res.status(400).send({message:"answer is required"})
        }
        if(!newPassword){
            res.status(400).send({message:"Password is required"})
        }
        // check
        const user = await userModels.findOne({email, answer})
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Wrong email or password"
            })
        }
        const hashed =  await hashPassword(newPassword)
        await userModels.findByIdAndUpdate(user._id, {password: hashed})
        res.status(202).send({
            success:true,
            message: "Password Changed Successfully",
        })
        
    }catch(error){
        res.status(500).send({
            success:false,
            message: "Somethien went wrong",
            error
        })
    }
}

const testController = (req, res) =>{
    res.send("Protected");
}

export {registerController,loginController,testController,forgetPasswordController}