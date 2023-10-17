import { NextResponse } from "next/server";
// import data from "../../../../db.json";
import data from "@/app/sampleDb.json";
import EmployeeModel from "@/server/models/employeeModel";
import connectToDatabase from "@/server/lib/utils/database";


export async function GET(request: Request) {
    await connectToDatabase();
    // const data: Object = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve((res: any) => {
    //             res
    //         })
    //     }, 100);
    // })

    const details = [
        { empId: 1234, name: 'Jack', designation: 'SE', salary: 23000 },
        { empId: 4567, name: 'Johnson', designation: 'SSE', salary: 15000 },
        { empId: 8910, name: 'Sachin', designation: 'TA', salary: 30000 }
    ];

    const er = await EmployeeModel.find({});
    if (er.length > 0) {
        console.log(er)
    } else {
        const jsp = await EmployeeModel.create(details);
        console.log(jsp);
    }


    return NextResponse.json({
        ...data
    })
}