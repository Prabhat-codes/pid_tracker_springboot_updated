import React, { useEffect, useState } from "react";
import '../styles/admin.css';
const Admin = () => {
  const [usersdata, setUsersData] = useState([]);

  useEffect(() => {
    fetch("https://exampleapi.com/users")
      .then((response) => response.json())
      .then((data) => setUsersData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 style={{margin:"20px auto"}}>Welcome Admin!</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>PIDs Reviewed</th>
            <th>PIDs Developed</th>
            <th>Avg Time to Approve</th>
            <th>Avg Time to Get Approved</th>
          </tr>
        </thead>
        <tbody>
          {usersdata.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.pids_reviewed}</td>
              <td>{user.pids_developed}</td>
              <td>{user.avg_time_to_approve}</td>
              <td>{user.avg_time_to_get_approved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin