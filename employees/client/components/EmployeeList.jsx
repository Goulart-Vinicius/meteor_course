import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Employees } from "../../imports/collections/employees";
import EmployeeDetail from "./EmployeeDetail";

function EmployeeList() {
  const [number_records, setNumber_records] = useState(20);

  const employees = useTracker(() => {
    Meteor.subscribe("employees", number_records);
    return Employees.find().fetch();
  }, [number_records]);

  function LoadMorehandleClick() {
    Meteor.subscribe("employees", number_records);
    setNumber_records(number_records + 20);
  }

  let emplyeesList = <span>Loading...</span>;

  if (employees) {
    emplyeesList = employees.map((employee) => {
      return <EmployeeDetail key={employee._id} employee={employee} />;
    });
  }
  return (
    <div className="flex flex-col justify-between items-start mb-24">
      <ul className="flex flex-row justify-around flex-wrap ">
        {emplyeesList}
      </ul>
      <button
        className="
        border-green-700
         border-4 rounded-xl 
         shadow-md font-bold 
        hover:bg-green-700 m-8 w-44 h-16  
        text-green-700 
         hover:text-white
         hover:shadow-inner
         fixed bg-white bottom-0"
        type="button"
        onClick={LoadMorehandleClick}
      >
        Load More
      </button>
    </div>
  );
}
export default EmployeeList;
