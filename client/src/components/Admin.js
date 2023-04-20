import React, { useEffect, useState } from "react";
import '../styles/admin.css';
import AdminTable from "./AdminTable";
const Admin = () => {
  const [usersdata, setUsersData] = useState([]);

  // useEffect(() => {
  //   fetch("https://exampleapi.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsersData(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div>
      <h1 style={{margin:"20px auto"}}>Welcome Admin!</h1>
      <AdminTable />
    </div>
  );
}

export default Admin