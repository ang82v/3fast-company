import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
  console.log(rest);
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретиля, раз</th>
              <th scope="col">Закладка</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} user={user} {...rest} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
