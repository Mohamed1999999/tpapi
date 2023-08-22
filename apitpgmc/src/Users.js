import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Farba Sy" },
    { id: 2, name: "Mohamed Mbodj" },
    { id: 3, name: "Aly Diop" },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
