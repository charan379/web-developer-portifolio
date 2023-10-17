import { NextResponse } from "next/server";
// import data from "../../../../db.json";
import data from "@/app/sampleDb.json";


export async function GET(request: Request) {
    // const data: Object = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve((res: any) => {
    //             res
    //         })
    //     }, 100);
    // })

    return NextResponse.json({
        ...data
    })
}