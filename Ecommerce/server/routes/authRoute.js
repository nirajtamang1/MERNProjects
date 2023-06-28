import  express from "express";
import {registerController, loginController,testController,forgetPasswordController} from '../controllers/authController.js'
import {isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post('/register', registerController)

//login || POst
router.post('/login', loginController);

//Forget Password || POst
router.post('/forget-password', forgetPasswordController);

//test routes
router.get('/test',requireSignIn, isAdmin, testController)

//protect rout auth
router.get("/user-auth", requireSignIn, (req, res)=>{
    res.status(200).send({ok: true});
})

export default router;