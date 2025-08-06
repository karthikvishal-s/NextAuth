import { NextResponse } from "next/server";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt";

export async function POST(req){
    try{
        const body = await req.json();
        const userData = body.formData

        if(!userData?.email || !userData.password){
            return NextResponse.json({error: "All Fields are required"}, {status: 400});
        }

        // Check for duplicate email

        const duplicate = await User.findOne({email: userData.email})
        .lean()
        .exec();

    if(duplicate){
        return NextResponse.json
        ({message: "User already exists(Email)"}, {status: 409});
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;

    await User.create(userData);
    return NextResponse.json({message: "User created successfully"}, {status: 201});

    } catch (error){
        console.log(error)
        return NextResponse.json({error: "Error",error}, {status: 500});
    }
}