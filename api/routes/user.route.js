import express from "express";
import { getUserListing, test, updateUser } from "../controllers/user.controller.js";
 import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

<<<<<<< HEAD
router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)
=======
router.get("/test", test);
router.post('/update/:id', verifyToken, updateUser);
router.get('listings/:id',verifyToken,getUserListing);
>>>>>>> 6fd3094849ead74b13b391ff65f1f20e7414f112

export default router;
