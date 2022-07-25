import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    axios.get("http://localhost:8080/user/viewall").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }
  async function deleteUser(Usr) {
    await axios.delete("http://localhost:8080/user/delete/" + Usr.id);
    getUser();
  }

  return (
    <div className="container">
      <h3 className="p-3 text-center">React - Display a list of users</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Project</th>
            <th>OPERATION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>Project_ id {user.project.id}</td>
              <td>
                <span onClick={() => deleteUser(user)} className="btn">
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
export default AdminUser;
