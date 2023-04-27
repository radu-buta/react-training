import { useGetUsersQuery } from "services/users";
import Loader from "components/Loader";

export default function SeeUsers() {
  const {
    data: users,
    isLoading: isGetUsersLoading,
    error: getUsersError,
  } = useGetUsersQuery();

  const errors = [getUsersError];
  const isError = errors.some((error) => error);

  const renderError = () => {
    return (
      <div>
        Error:
        {errors.forEach((error) => {
          if (error) return <>{error.status}</>;
        })}
      </div>
    );
  };

  const renderUsers = () => {
    return (
      <ul>
        {isError
          ? renderError()
          : users.map((user) => <li key={user.id}>{user.data.name}</li>)}
      </ul>
    );
  };

  return isGetUsersLoading ? <Loader /> : renderUsers();
}
