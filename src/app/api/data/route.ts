import { NextResponse } from "next/server";
import data from "../../../../db.json";

export async function GET(request: Request) {
    return NextResponse.json({
        ...data
    })
}