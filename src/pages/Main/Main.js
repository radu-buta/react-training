import { Outlet } from "react-router-dom";
import "./Main.styles.css";
import * as routes from "routes";
import NavbarLink from "components/NavbarLink/NavbarLink";

export default function Main() {
  // const navigate = useNavigate();

  // const onButtonClick = (event) => {
  //   navigate(event.target.id);
  // };

  return (
    <div className="main">
      <h1>Hello 🙋🏻‍♂️</h1>

      <div>
        <NavbarLink to={routes.ADD_TODO} label="Add TODO" />
        <NavbarLink to={routes.SEE_TODOS} label="See TODOs" />
        <NavbarLink to={routes.SEE_USERS} label="See Users" />
      </div>
      <br />
      <Outlet />
    </div>
  );
}
