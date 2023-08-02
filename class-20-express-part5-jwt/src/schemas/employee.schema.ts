import mongoose from "mongoose";

import { Employee } from "../types/employee.types";

const employeeSchema = new mongoose.Schema<Employee>({
  name: {type: String, required: true},
  email: { type: String, required: true },
  role: { type: String, required: true },
  cel: { type: String, required: true },
  password: { type: String, required: true }
});

export const EmployeeSchema = mongoose.model("Employees", employeeSchema);
