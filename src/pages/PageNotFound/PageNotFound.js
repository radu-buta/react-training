import { useNavigate } from "react-router-dom";
import * as routes from "../../routes";

export default function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const onButtonClick = () => {
    navigate(routes.HOME);
    // Note: initially I tried with useHistory(), founded on v5.reactrouter;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        💔 <br />
        Error: <br />
        Page Not Found
      </h1>
      <button onClick={goBack}>⬅ Go Back</button>
      <p>- or -</p>
      <button id="home" onClick={onButtonClick}>
        Go Home 😈
      </button>
    </div>
  );
}
