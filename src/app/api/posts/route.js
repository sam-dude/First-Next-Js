import { NextResponse } from "next/server"
import connect from "alia/utils/db"
import Post from "alia/models/Post"
export const GET = async (request) => {
    //fetch

    try{
       await connect()
       
       const posts = await Post.find()
    }catch(err){
        return new NextResponse("Database Error", { status: 500 })
    }
}