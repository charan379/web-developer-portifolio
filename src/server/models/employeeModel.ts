import mongoose from "mongoose";


const employeeSchema = new mongoose.Schema({
    "name": String,
    "empId": { type: Number, unique: true },
    "designation": String,
    "salary": String
})

const EmployeeModel = mongoose.models.employee || mongoose.model('employee', employeeSchema);
export default EmployeeModel;