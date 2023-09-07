import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../users/usersSlice";

const Users = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <><h1>Users List</h1>
    <ul>
      {isLoading && <li>Loading...</li>}
      {error && <li>{error}</li>}
      {users.map((user) => (
        <li key={user.email}>{user.name.first} {user.name.last}</li>
      ))}
    </ul>
    </>
  );
}

export default Users;