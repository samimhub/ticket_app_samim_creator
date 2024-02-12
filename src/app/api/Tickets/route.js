import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";
import { dbConnect } from  "@/app/lib/dbConnect";

export async function GET(req){
    dbConnect();
    try{
        const tickets =await Ticket.find();
        return NextResponse.json({tickets},{status:200})
    }catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}


export async function POST(req) {
    dbConnect();
    try {
      const body = await req.json();
      const {formData}=body;
  
      await Ticket.create(formData);
  
      return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
    } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }