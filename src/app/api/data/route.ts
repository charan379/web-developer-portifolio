import { NextResponse } from "next/server";
import data from "../../../../db.json";
// import data from "./sampleDb.json";


export async function GET(request: Request) {
    const data: Object = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve((res: any) => {
                res
            })
        }, 2000);
    })

    const res = await data;
    return NextResponse.json({
        ...res
    })
}