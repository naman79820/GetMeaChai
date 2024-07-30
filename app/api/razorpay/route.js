import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req, res) => {

  await connectDB()
  let body = await req.formData()
  body = Object.fromEntries(body)

  let p = await Payment.findOne({oid:body.razorpay_order_id})
if(!p){
  return NextResponse.json({success:false},"order id not found")
}

let user = await User.findOne({username:p.to_user})
const secret = user.razorpaysecret

let xx = validatePaymentVerification({"order_id":body.razorpay_order_id , "payment_id":body.razorpay_payment_id}, body.razorpay_signature, secret)

if(xx){
  const Updatepayment = await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:true},{new:true})
 return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${Updatepayment.to_user}?paymentdone=true`)        
}
else{
  return NextResponse.json({success:false, message:"payment verification failed"})
}
}

