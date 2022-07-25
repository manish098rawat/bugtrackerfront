import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminBug() {
  const [Bugs, setBugs] = useState([]);

  useEffect(() => {
    getBugs()
  }, []);

  async function getBugs(){
    axios.get("http://localhost:8080/bugs/viewall").then((response) => {
      setBugs(response.data);
      console.log(response.data);
    });
  }

  async function deleteBug(bug) {
    await axios.delete("http://localhost:8080/bugs/delete/"+bug.id);
    getBugs()
  }
  

  return (
    <div className="container">
      <h3 className="p-3 text-center">list of Bugss</h3>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Bug Name</th>
            <th>project Id</th>
            <th>Discription</th>
            <th>Status</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {Bugs.map((Bug) => (
            <tr key={Bug.id}>
              <td>{Bug.id}</td>
              <td>{Bug.bugName}</td>
              <td>{Bug.project.id}</td>
              <td>{Bug.bugDescription}</td>
              <td>{Bug.bugStatus.toString()}</td>
              <td>
                <span className="btn">
                Update
                </span>
                <span onClick={() => deleteBug(Bug)} className="btn">
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
export default AdminBug;
