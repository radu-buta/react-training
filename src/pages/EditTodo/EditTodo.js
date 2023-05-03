import { useParams } from "react-router-dom";

import { useGetUsersAndTodos } from "hooks";

import Loader from "components/Loader";
import { PARAMS } from "routes";

export default function EditTodo() {
  const { [PARAMS.TODO_ID]: todoId } = useParams();

  console.log({ todoId });

  const {
    data: { todos },
    errors,
    isError,
    isLoading,
  } = useGetUsersAndTodos();

  const renderError = () => {
    return (
      <div>
        Error
        {errors.forEach((error) => {
          if (error) return <>{error.status}</>;
        })}
      </div>
    );
  };

  const renderTodo = () => {
    return <>{isError ? renderError() : <p>Check: TODO ID: {todoId}</p>}</>;
  };

  return isLoading ? <Loader /> : renderTodo();
}
