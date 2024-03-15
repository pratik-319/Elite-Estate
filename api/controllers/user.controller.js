import User from "../modules/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
  res.json({ message: "Hello world user controller" });
};


export const updateUser = async (req, res, next) => {
  if (req.user.id != req.params.id)
    return next(errorHandler(401, "you can only update your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        } 
      },
      { new: true }  
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
    
  } catch (error) {
    next(error);
  }
};

export const getUserListing=async(req,res,next)=>{
  if(req.body.id ===req.params.id){
    try {
        const listing =await listing.find({userRef:req.params.id});
        res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  }

  else{
      return next (errorHandler(401,'You can only view your own Listing'));
  }
}
