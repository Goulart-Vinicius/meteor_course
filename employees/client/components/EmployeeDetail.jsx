import React from "react";

export default function EmployeeDetail({ employee }) {
  return (
    <li className=" sm:w-72 w-3/5 shadow-lg m-6 p-4 flex flex-col justify-between rounded-lg">
      <img className="max-h-62 object-cover rounded-3xl shadow-sm" src={employee.avatar}></img>
      <h2 className="font-sans text-3xl font-bold my-2">{employee.username}</h2>
      <ul>
        <li>{employee.email}</li>
        <li>{employee.phone}</li>
      </ul>
    </li>
  );
}
