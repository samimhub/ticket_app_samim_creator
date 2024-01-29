import { NextResponse } from "next/server";
import { dbConnect } from "../lib/dbConnect"
import Ticket from "../models/Ticket";

const addTicketHandeler =async(req:Request)=>{
   try{
    await dbConnect(); 
    const body = await req.json()
    const ticketData = body.formData
    await Ticket.create(ticketData);
    return NextResponse.json({message:"Ticket created"},{status:501})
   }catch(error){
    return NextResponse.json({message:"Error",error},{status:500});
   }

}
export {
   addTicketHandeler as POST
}