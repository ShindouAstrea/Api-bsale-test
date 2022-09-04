import {Router} from "express";
import {methods} from "../methods/method";
const router = Router();
 // route /
router.get('/',methods.getCategories) ;

export default router;