import React, { useState } from "react";
function EmployeeModule() {
    
    const [Employee, setEmployee] = useState([
        { id: 1, email: 'frank@gmail.com', password: 'qwert', Employee_name: 'rohan', bug_id:4 }
    ]);

    return (
        <div className="container">
            <h1>this page gets Employee detail from login page </h1>
            <h2> And than employee can change the satus of bug</h2>
        </div>
    );
}
export default EmployeeModule