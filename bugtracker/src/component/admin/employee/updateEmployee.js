import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Table from "react-bootstrap/Table";
function Employeeupdate(bug) {
  const [Bugs, setBugs] = useState([]);

  const updateHandler = (e) => {
    console.log(Bugs);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/bugs/viewall").then((response) => {
      setBugs(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <select
        onChange={(e) => {
          setBugs(e.target.value);
        }}
      >
        {Bugs.map((B) => {
          return (
            <option value={B.bugName} key={B.id}>
              ${B.id}: {B.bugName}  
            </option>
          );
        })}
      </select>
      <button onClick={updateHandler} className="addBug">
        update
      </button>
    </div>
  );
}
export default Employeeupdate;
