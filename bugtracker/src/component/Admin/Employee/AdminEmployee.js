import React, { useEffect, useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import Employeeupdate from "./updateEmployee";


function AdminEmployee() {
  const [Employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployee()
  }, []);

  async function getEmployee(){
    axios.get("http://localhost:8080/employee/viewall").then((response) => {
      setEmployees(response.data);
      console.log(response.data);
    });
  }

  async function deleteEmployee(emp) {
    await axios.delete("http://localhost:8080/employee/delete/"+emp.id);
    getEmployee()
  }

  function checkBug(params) {
    if (params.id == null) {
      return <>'null'</>;
    } else {
      return params.id;
    }
  }

  return (
    <div className="container">
      <h3 className="p-3 text-center">React - Display a list of Employees</h3>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Bug_Assigned</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {Employees.map((Employee) => (
            <tr key={Employee.id}>
              <td>{Employee.id}</td>
              <td>{Employee.employeeName}</td>
              <td>{Employee.email}</td>
              <td>{Employee.employeeContact}</td>
              <td>{() => {}}</td>
              <td>
                <span onClick={() => Employeeupdate(Employee.bug)} className="btn">
                Update
                </span>
                <span onClick={() => deleteEmployee(Employee)} className="btn">
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AdminEmployee;
