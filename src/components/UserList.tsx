import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";
import { useActions } from "../hooks/useActions";

const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user);

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Идёт загрузка...</h2>;
  }

  if (error) {
    return <h2>Произошла ошибка: {error}</h2>;
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
