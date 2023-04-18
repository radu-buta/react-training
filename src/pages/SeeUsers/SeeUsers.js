import { useEffect, useState } from "react";
import { getUsers } from "api/getUsers";

export default function SeeUsers() {
  const [users, setUsers] = useState([]);
  const [errorState, setErrorState] = useState("");

  async function fetchUsers() {
    const usersData = await getUsers();
    if (usersData.success) {
      setUsers(usersData.data);
    } else {
      setErrorState(usersData.errorMessage);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return <p>Users list</p>;
}
