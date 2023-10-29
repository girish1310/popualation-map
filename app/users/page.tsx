import React from "react";
import UserTable from "./UserTable";

const UserPage = async () => {
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable />
    </>
  );
};

export default UserPage;
