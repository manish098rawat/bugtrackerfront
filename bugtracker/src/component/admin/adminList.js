import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminList() {
  const [Admins, setAdmins] = useState([]);

  useEffect(() => {
    getAdmins()
  }, []);

  async function getAdmins(){
    axios.get("http://localhost:8080/admin/viewall").then((response) => {
      setAdmins(response.data);
    });
  }


  return (
    <div className="container">
      <h3 className="p-3 text-center">list of Admins</h3>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Admins Name</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Admins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.adminName}</td>
              <td>{admin.adminContact}</td>
              <td>{admin.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AdminList;
