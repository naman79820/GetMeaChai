"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount , to_username , paymentform)=>{
    await connectDB()
    let user = await User.findOne({username:to_username})
    const secret = user.razorpaysecret
    var instance = new Razorpay({ key_id:   user.razorpayid, key_secret: secret })

   

let options = {
    amount: Number.parseInt(amount),
    currency: "INR"
}
let x = await instance.orders.create(options)

await Payment.create ({oid:x.id , amount: amount/100 , to_user:to_username, message:paymentform.message , name:paymentform.name})
return x
}
export const fetchuser = async (username)=>{
await connectDB()
let u = await User.findOne({username: username})   
     
let user = u.toObject({flattenObjectIds: true})
return user
}

export const fetchpayments = async (username)=>{
    await connectDB()
    let p = await Payment.find({to_user: username , done:true}).sort({amount:-1}).limit(7).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDB();

    // Assuming `data` is already an object
    let ndata = data;

    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username });
        if (u) {
            throw new Error('Username already exists');
        }
    }

    // Perform update operation
    await User.updateOne({ username: oldusername }, { $set: ndata });

    return { success: true };
};
