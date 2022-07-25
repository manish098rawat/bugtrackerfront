import React, { useEffect, useState } from "react";
import axios from "axios";
import projectupdate from "./updateproject";

function AdminProject() {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    getProject()
  }, []);

  async function getProject(){
    axios.get("http://localhost:8080/projects/viewall").then((response) => {
      setProjects(response.data);
      console.log(response.data);
    });
  }

  async function deleteproject(pro) {
    await axios.delete("http://localhost:8080/projects/delete/"+pro.id);
    getProject()
  }
  

  return (
    <div className="container">
      <h3 className="p-3 text-center">list of Projects</h3>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Project code</th>
            <th>Discription</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {Projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.projectName}</td>
              <td>{project.projectIdentifier}</td>
              <td>{project.description}</td>
              <td>
                <span className="btn">
                Update
                </span>
                <span onClick={() => deleteproject(project)} className="btn">
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
export default AdminProject;
